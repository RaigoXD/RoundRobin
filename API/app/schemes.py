from pydantic import BaseModel, Field
from typing import List
#schemes to obtain the information in the best way
class Process(BaseModel):
    nombre:str 
    borderColor:str 
    backgroundColor:str
    duracion:int

class Information(BaseModel):
    quantum: int = Field(gt=0)
    procesos: List[Process]
