
class BinaryTreeNode():
    right = None
    left = None
    data = None

    def __init__(self, data):
        self.data = data


def insert(root, data):
    if not root:
        root = BinaryTreeNode(root)
    else:
        if root.data < data:
            if not root.right:
                root.right = BinaryTreeNode(data)
            else:
                insert(root.right, data)
        else:
            if not root.left:
                root.left = BinaryTreeNode(data)
            else:
                insert(root.left, data)



DFS = []
def dfs_binary_tree(root):
    if not root:
        return
    DFS.append(root.data)
    dfs_binary_tree(root.left)
    dfs_binary_tree(root.right)

def insertArrIntoBinaryTree(root, arr):
    for i in arr:
        insert(root, i)
    return root


root = BinaryTreeNode(78)
insertArrIntoBinaryTree(root, [56, 97, 21, 67, 62, 81, 115])

dfs_binary_tree(root)
DFS.sort()
print(DFS)


