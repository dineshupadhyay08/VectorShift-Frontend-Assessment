from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# ----- CORS (frontend ke liye) -----
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

# ----- Request Body Schema -----
class Pipeline(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]

# ----- POST endpoint -----
@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # ----- DAG CHECK -----
    graph = {}
    for node in nodes:
        graph[node["id"]] = []

    for edge in edges:
        graph[edge["source"]].append(edge["target"])

    visited = set()
    rec_stack = set()

    def has_cycle(v):
        visited.add(v)
        rec_stack.add(v)

        for neighbour in graph[v]:
            if neighbour not in visited:
                if has_cycle(neighbour):
                    return True
            elif neighbour in rec_stack:
                return True

        rec_stack.remove(v)
        return False

    is_dag = True
    for node in graph:
        if node not in visited:
            if has_cycle(node):
                is_dag = False
                break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
