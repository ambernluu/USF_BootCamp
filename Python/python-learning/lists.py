lemon = {'sour', 'yellow', 'fruit', 'bumpy'}
banana = {'fruit', 'smooth', 'sweet', 'yellow'}

chicken ={
    'color': 'gray',
    'breed': 'silkie'
}
def gen_board(size1, size2, initial_val=None):
    return[[initial_val for x in range(size1)] for y in range(size2) ]

chickens = [
    {"name": "Henry", "sex": "Rooster"},
    {"name": "Olive", "sex": "Hen"},
    {"name": "Junior", "sex": "Rooster"},
    {"name": "Stiletto", "sex": "Hen"},
    {"name": "Butters", "sex": "Rooster"},
    {"name": "Mandy", "sex": "Hen"},
]

hens = [bird["name"] for bird in chickens if bird["sex"] == "Hen"]

scores = [55, 89, 99, 87, 60, 70, 74, 76, 90, 82]

# grades = ['PASS' for score in scores if score >= 70]
grades = ['PASS' if score >= 70 else "FAIL" for score in scores]
