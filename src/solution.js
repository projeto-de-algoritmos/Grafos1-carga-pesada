
BR[116] = {RS, SC, PR, SP, MG, BA, PE, CE}
BR[101] = {RS, SC, PR, SP, RJ, ES, BA, SE, AL, PE, PB, RN}
BR[364] = {AC, RO, MT, GO, SP}
BR[230] = {AM, PA, MA, PI, CE, PB}
BR[163] = {SC, PR, MS, MT, PA}
BR[153] = {RS, SC, PR, SP, MG, GO, TO, PA}
BR[158] = {RS, SC, PR, MS, GO, MT, PA}
BR[174] = {RR, AM, MT}
BR[135] = {MA, PI, BA, MG}
BR[262] = {MS, MG, ES, SP}

graph[116] = [262, 230]
graph[101] = [262]
graph[364] = [174, 163, 158, 153, 262]
graph[230] = [174, 163, 158, 153, 135, 116]
graph[163] = [230, 364, 262]
graph[153] = [158, 230, 364, 262, 158]
graph[158] = [153, 364, 262, 230]
graph[174] = [230, 364]
graph[135] = [230, 116]
graph[262] = [116, 101, 364, 163, 153, 158]




BR = {}
BR[116] = {RS, SC, PR, SP, MG, BA, PE, CE}
BR[101] = {RS, SC, PR, SP, RJ, ES, BA, SE, AL, PE, PB, RN}
BR[364] = {AC, RO, MT, GO, SP}
BR[230] = {AM, PA, MA, PI, CE, PB}
BR[163] = {SC, PR, MS, MT, PA}
BR[153] = {RS, SC, PR, SP, MG, GO, TO, PA}
BR[158] = {RS, SC, PR, MS, GO, MT, PA}
BR[174] = {RR, AM, MT}
BR[135] = {MA, PI, BA, MG}
BR[262] = {MS, MG, ES, SP}

graph = {}
graph[116] = [262, 230]
graph[101] = [262]
graph[364] = [174, 163, 158, 153, 262]
graph[230] = [174, 163, 158, 153, 135, 116]
graph[163] = [230, 364, 262]
graph[153] = [158, 230, 364, 262, 158]
graph[158] = [153, 364, 262, 230]
graph[174] = [230, 364]
graph[135] = [230, 116]
graph[262] = [116, 101, 364, 163, 153, 158]
