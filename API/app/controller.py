# libraries
from fastapi import APIRouter, Depends
from .schemes import Information
from .services import RoundRobin


# Controller for the endpoints
routes = APIRouter(tags=["Round Robin Service"])


def build_depends(information: Information):
    return RoundRobin(information)


@routes.post(
    path="/process_algorithm", response_description="Round Robin process successfully"
)
def process_algorithm(
    information: Information, round_robin: RoundRobin = Depends(build_depends)
):
    return round_robin.run()
