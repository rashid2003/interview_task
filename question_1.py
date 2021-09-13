
def condition(arr):
    return [not ((x*2 - (5 - x))%2) for x in arr]

print(condition([1, 4, 5, 7, 12, 19]))
