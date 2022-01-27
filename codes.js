//Type your code inside Array named as answers.
module.exports = {
    answers: [
    `
n = 6
m = []
for i in range(n):
    m.append(list(map(int, input().split()[:n])))
    
def sum_glass(m, i, j):
    """Assumes hour-glass is in bounds of m!"""
    return sum(m[i][j:j+3]) + m[i+1][j+1] + sum(m[i+2][j:j+3])

best = float("-inf")
for i in range(4):
    for j in range(4):
        s = sum_glass(m, i, j)
        if s > best:
            best = s
            
print (best)
    `
    ]
}