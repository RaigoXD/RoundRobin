#schemas
from .schemes import Information, Process
import pprint as pp
import functools


class RoundRobin():
    """Class to calculate and run the Round robin algorithm"""
    
    def __init__(self,data_info: Information):
        """Constructor
        Args:
            data_info (Information): the information to process
        """
        self.quantum = data_info.quantum
        self.process_list = data_info.procesos

        print(self.quantum)
        pp.pprint(self.process_list)


    def run(self):
        execution_list = [[process.nombre, index ,process.duracion, process.backgroundColor, process.borderColor] for index,process in enumerate(self.process_list)]  
        # pp.pprint(execution_list)
        queue_execution = []
        binnacle = []

        actual_time = 0 # <- Actual time process execution
        time_quantum_temp = 1 # <- counter quantum by
        actual_task = None # <- initial Task 
        while(execution_list or queue_execution or actual_task != None):

            if len(execution_list) > 0 and execution_list[0][1] == actual_time:
                print(f"Agregado: {execution_list[0][0]} - {actual_time}")
                queue_execution.append(execution_list[0])
                execution_list.pop(0)

            if len(queue_execution) > 0 and actual_task is None:
                actual_task = queue_execution.pop(0)
                print(f"Starting {actual_task[0]} - {actual_time}")

            if actual_task != None:
                print(f"Ejecutando: {actual_task[0]} - {actual_task[2]} - {actual_time} - {time_quantum_temp}")
                
                if time_quantum_temp == self.quantum or actual_task[2] == time_quantum_temp:
                    print(f"Finaliza: {actual_task[0]} - {actual_time + 1}")
                    
                    if (actual_task[2] - self.quantum) > 0:
                        print("Encolo nueva tarea")
                        new_task = actual_task.copy()
                        new_task[2] = actual_task[2] - self.quantum
                        queue_execution.append(new_task)
                                        
                    info_json = {
                        "x": [((actual_time + 1) - time_quantum_temp), (actual_time + 1)],
                        "y": actual_task[0], 
                        "backgroundColor": actual_task[3], 
                        "borderColor": actual_task[4]
                    }
                    binnacle.append(info_json)

                    time_quantum_temp = 1
                    actual_task = None

                else:
                    time_quantum_temp += 1 
            actual_time += 1
    
        pp.pprint(queue_execution)
        pp.pprint(binnacle)
        return binnacle
        
        