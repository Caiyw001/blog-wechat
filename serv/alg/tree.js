class Tree {
  constructor(data, lchild, rchild) {
    this.data = data;
    this.lchild = lchild;
    this.rchild = rchild;
  }
}

let tree = new Tree('A', new Tree('B', null, null), new Tree('C', null, null));

// 前序遍历
function PreEach(tree) {
  if (tree === null) return;
  console.log(tree.data);
  PreEach(tree.lchild);
  PreEach(tree.rchild);
}

// 中序遍历
function MidEach(tree) {
  if (tree === null) return;
  MidEach(tree.lchild);
  console.log(tree.data);
  MidEach(tree.rchild);
}

PreEach(tree);
console.log('###############')
MidEach(tree);