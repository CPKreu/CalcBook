import * as vscode from "vscode";

export default [
    // Expression functions
    {
        label: "compile",
        kind: vscode.CompletionItemKind.Function,
        detail: "Expression functions",
        documentation: new vscode.MarkdownString(
            "Parse and compile an expression.\n```js\ncompile(expr)\n```"
        ),
    },
    {
        label: "evaluate",
        kind: vscode.CompletionItemKind.Function,
        detail: "Expression functions",
        documentation: new vscode.MarkdownString(
            "Evaluate an expression.\n```js\nevaluate(expr [, scope])\n```"
        ),
    },
    {
        label: "help",
        kind: vscode.CompletionItemKind.Function,
        detail: "Expression functions",
        documentation: new vscode.MarkdownString(
            "Retrieve help on a function or data type.\n```js\nhelp(search)\n```"
        ),
    },
    {
        label: "parser",
        kind: vscode.CompletionItemKind.Function,
        detail: "Expression functions",
        documentation: new vscode.MarkdownString(
            "Create a parser.\n```js\nparser()\n```"
        ),
    },

    // Algebra functions
    {
        label: "derivative",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Takes the derivative of an expression expressed in parser Nodes.\n```js\nderivative(expr, variable)\n```"
        ),
    },
    {
        label: "leafCount",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Gives the number of “leaf nodes” in the parse tree.\n```js\nleafCount(expr)\n```"
        ),
    },
    {
        label: "lsolve",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Finds one solution of a linear equation system by forwards substitution.\n```js\nlsolve(L, b)\n```"
        ),
    },
    {
        label: "lsolveAll",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Finds all solutions of a linear equation system by forwards substitution.\n```js\nlsolveAll(L, b)\n```"
        ),
    },
    {
        label: "lup",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Calculate the Matrix LU decomposition with partial pivoting.\n```js\nlup(A)\n```"
        ),
    },
    {
        label: "lusolve",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Solve the linear system A * x = b.\n```js\nlusolve(A, b)\n```"
        ),
    },
    {
        label: "lyap",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Solve the continuous-time Lyapunov equation AP+PA’+Q=0 for P.\n```js\nlyap(A, Q)\n```"
        ),
    },
    {
        label: "polynomialRoot",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Find the numerical values of the distinct roots of a polynomial.\n```js\npolynomialRoot(constant, linearCoeff, quadraticCoeff, cubicCoeff)\n```"
        ),
    },
    {
        label: "qr",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Calculate the Matrix QR decomposition.\n```js\nqr(A)\n```"
        ),
    },
    {
        label: "rationalize",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Transform a rationalizable expression into a rational fraction.\n```js\nrationalize(expr)\n```"
        ),
    },
    {
        label: "resolve",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Replace variable nodes with their scoped values.\n```js\nresolve(expr, scope)\n```"
        ),
    },
    {
        label: "schur",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Perform a real Schur decomposition of a matrix.\n```js\nschur(A)\n```"
        ),
    },
    {
        label: "simplify",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Simplify an expression tree.\n```js\nsimplify(expr)\n```"
        ),
    },
    {
        label: "simplifyConstant",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Replace constant subexpressions with computed values.\n```js\nsimplifyConstant(expr)\n```"
        ),
    },
    {
        label: "simplifyCore",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Perform a single-pass simplification for performance.\n```js\nsimplifyCore(expr)\n```"
        ),
    },
    {
        label: "slu",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Calculate the Sparse Matrix LU decomposition with full pivoting.\n```js\nslu(A, order, threshold)\n```"
        ),
    },
    {
        label: "sylvester",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Solve the Sylvester equation AX+XB=C for X.\n```js\nsylvester(A, B, C)\n```"
        ),
    },
    {
        label: "symbolicEqual",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Determine if two expressions are symbolically equal.\n```js\nsymbolicEqual(expr1, expr2)\n```"
        ),
    },
    {
        label: "usolve",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Find one solution by backward substitution.\n```js\nusolve(U, b)\n```"
        ),
    },
    {
        label: "usolveAll",
        kind: vscode.CompletionItemKind.Function,
        detail: "Algebra functions",
        documentation: new vscode.MarkdownString(
            "Find all solutions by backward substitution.\n```js\nusolveAll(U, b)\n```"
        ),
    },

    // Arithmetic functions
    {
        label: "abs",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the absolute value of a number.\n```js\nabs(x)\n```"
        ),
    },
    {
        label: "add",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Add two or more values, x + y.\n```js\nadd(x, y)\n```"
        ),
    },
    {
        label: "cbrt",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the cubic root of a value.\n```js\ncbrt(x [, allRoots])\n```"
        ),
    },
    {
        label: "ceil",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Round a value towards plus infinity.\n```js\nceil(x)\n```"
        ),
    },
    {
        label: "cube",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Compute the cube of a value, x * x * x.\n```js\ncube(x)\n```"
        ),
    },
    {
        label: "divide",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Divide two values, x / y.\n```js\ndivide(x, y)\n```"
        ),
    },
    {
        label: "dotDivide",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Divide two matrices element-wise.\n```js\ndotDivide(x, y)\n```"
        ),
    },
    {
        label: "dotMultiply",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Multiply two matrices element-wise.\n```js\ndotMultiply(x, y)\n```"
        ),
    },
    {
        label: "dotPow",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculates the power of x to y element-wise.\n```js\ndotPow(x, y)\n```"
        ),
    },
    {
        label: "exp",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the exponential of a value.\n```js\nexp(x)\n```"
        ),
    },
    {
        label: "expm1",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate exp(x) minus 1.\n```js\nexpm1(x)\n```"
        ),
    },
    {
        label: "fix",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Round a value towards zero.\n```js\nfix(x)\n```"
        ),
    },
    {
        label: "floor",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Round a value towards minus infinity.\n```js\nfloor(x)\n```"
        ),
    },
    {
        label: "gcd",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the greatest common divisor.\n```js\ngcd(a, b)\n```"
        ),
    },
    {
        label: "hypot",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the hypotenuse of a list of values.\n```js\nhypot(a, b, ...)\n```"
        ),
    },
    {
        label: "invmod",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the modular multiplicative inverse.\n```js\ninvmod(a, b)\n```"
        ),
    },
    {
        label: "lcm",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the least common multiple.\n```js\nlcm(a, b)\n```"
        ),
    },
    {
        label: "log",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the logarithm of a value.\n```js\nlog(x [, base])\n```"
        ),
    },
    {
        label: "log10",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the base-10 logarithm.\n```js\nlog10(x)\n```"
        ),
    },
    {
        label: "log1p",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the logarithm of (x + 1).\n```js\nlog1p(x)\n```"
        ),
    },
    {
        label: "log2",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the base-2 logarithm.\n```js\nlog2(x)\n```"
        ),
    },
    {
        label: "mod",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the modulus (remainder).\n```js\nmod(x, y)\n```"
        ),
    },
    {
        label: "multiply",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Multiply two or more values.\n```js\nmultiply(x, y)\n```"
        ),
    },
    {
        label: "norm",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the norm of a number, vector, or matrix.\n```js\nnorm(x [, p])\n```"
        ),
    },
    {
        label: "nthRoot",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the nth root of a value.\n```js\nnthRoot(a)\n```"
        ),
    },
    {
        label: "nthRoots",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the nth roots of a value.\n```js\nnthRoots(x)\n```"
        ),
    },
    {
        label: "pow",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculates x raised to the power y.\n```js\npow(x, y)\n```"
        ),
    },
    {
        label: "round",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Round a value to the nearest integer (or specified decimal places).\n```js\nround(x [, n])\n```"
        ),
    },
    {
        label: "sign",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Determine the sign of a value.\n```js\nsign(x)\n```"
        ),
    },
    {
        label: "sqrt",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the square root of a value.\n```js\nsqrt(x)\n```"
        ),
    },
    {
        label: "square",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Compute the square of a value.\n```js\nsquare(x)\n```"
        ),
    },
    {
        label: "subtract",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Subtract one value from another.\n```js\nsubtract(x, y)\n```"
        ),
    },
    {
        label: "unaryMinus",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Apply a unary minus operation.\n```js\nunaryMinus(x)\n```"
        ),
    },
    {
        label: "unaryPlus",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Apply a unary plus operation.\n```js\nunaryPlus(x)\n```"
        ),
    },
    {
        label: "xgcd",
        kind: vscode.CompletionItemKind.Function,
        detail: "Arithmetic functions",
        documentation: new vscode.MarkdownString(
            "Calculate the extended greatest common divisor.\n```js\nxgcd(a, b)\n```"
        ),
    },

    // Bitwise functions
    {
        label: "bitAnd",
        kind: vscode.CompletionItemKind.Function,
        detail: "Bitwise functions",
        documentation: new vscode.MarkdownString(
            "Bitwise AND two values.\n```js\nbitAnd(x, y)\n```"
        ),
    },
    {
        label: "bitNot",
        kind: vscode.CompletionItemKind.Function,
        detail: "Bitwise functions",
        documentation: new vscode.MarkdownString(
            "Bitwise NOT a value.\n```js\nbitNot(x)\n```"
        ),
    },
    {
        label: "bitOr",
        kind: vscode.CompletionItemKind.Function,
        detail: "Bitwise functions",
        documentation: new vscode.MarkdownString(
            "Bitwise OR two values.\n```js\nbitOr(x, y)\n```"
        ),
    },
    {
        label: "bitXor",
        kind: vscode.CompletionItemKind.Function,
        detail: "Bitwise functions",
        documentation: new vscode.MarkdownString(
            "Bitwise XOR two values.\n```js\nbitXor(x, y)\n```"
        ),
    },
    {
        label: "leftShift",
        kind: vscode.CompletionItemKind.Function,
        detail: "Bitwise functions",
        documentation: new vscode.MarkdownString(
            "Bitwise left logical shift.\n```js\nleftShift(x, y)\n```"
        ),
    },
    {
        label: "rightArithShift",
        kind: vscode.CompletionItemKind.Function,
        detail: "Bitwise functions",
        documentation: new vscode.MarkdownString(
            "Bitwise right arithmetic shift.\n```js\nrightArithShift(x, y)\n```"
        ),
    },
    {
        label: "rightLogShift",
        kind: vscode.CompletionItemKind.Function,
        detail: "Bitwise functions",
        documentation: new vscode.MarkdownString(
            "Bitwise right logical shift.\n```js\nrightLogShift(x, y)\n```"
        ),
    },

    // Combinatorics functions
    {
        label: "bellNumbers",
        kind: vscode.CompletionItemKind.Function,
        detail: "Combinatorics functions",
        documentation: new vscode.MarkdownString(
            "Count the number of partitions of a set.\n```js\nbellNumbers(n)\n```"
        ),
    },
    {
        label: "catalan",
        kind: vscode.CompletionItemKind.Function,
        detail: "Combinatorics functions",
        documentation: new vscode.MarkdownString(
            "Enumerate combinatorial structures.\n```js\ncatalan(n)\n```"
        ),
    },
    {
        label: "composition",
        kind: vscode.CompletionItemKind.Function,
        detail: "Combinatorics functions",
        documentation: new vscode.MarkdownString(
            "Count compositions of n into k parts.\n```js\ncomposition(n, k)\n```"
        ),
    },
    {
        label: "stirlingS2",
        kind: vscode.CompletionItemKind.Function,
        detail: "Combinatorics functions",
        documentation: new vscode.MarkdownString(
            "Count ways to partition a set into k nonempty subsets.\n```js\nstirlingS2(n, k)\n```"
        ),
    },

    // Complex functions
    {
        label: "arg",
        kind: vscode.CompletionItemKind.Function,
        detail: "Complex functions",
        documentation: new vscode.MarkdownString(
            "Compute the argument of a complex value.\n```js\narg(x)\n```"
        ),
    },
    {
        label: "conj",
        kind: vscode.CompletionItemKind.Function,
        detail: "Complex functions",
        documentation: new vscode.MarkdownString(
            "Compute the complex conjugate.\n```js\nconj(x)\n```"
        ),
    },
    {
        label: "im",
        kind: vscode.CompletionItemKind.Function,
        detail: "Complex functions",
        documentation: new vscode.MarkdownString(
            "Get the imaginary part of a complex number.\n```js\nim(x)\n```"
        ),
    },
    {
        label: "re",
        kind: vscode.CompletionItemKind.Function,
        detail: "Complex functions",
        documentation: new vscode.MarkdownString(
            "Get the real part of a complex number.\n```js\nre(x)\n```"
        ),
    },

    // Geometry functions
    {
        label: "distance",
        kind: vscode.CompletionItemKind.Function,
        detail: "Geometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the Euclidean distance between two points.\n```js\ndistance([x1, y1], [x2, y2])\n```"
        ),
    },
    {
        label: "intersect",
        kind: vscode.CompletionItemKind.Function,
        detail: "Geometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the intersection of two lines or a line and a plane.\n```js\nintersect(pt1Line1, pt2Line1, pt1Line2, pt2Line2)\n```"
        ),
    },

    // Logical functions
    {
        label: "and",
        kind: vscode.CompletionItemKind.Function,
        detail: "Logical functions",
        documentation: new vscode.MarkdownString(
            "Logical and operation.\n```js\nand(x, y)\n```"
        ),
    },
    {
        label: "not",
        kind: vscode.CompletionItemKind.Function,
        detail: "Logical functions",
        documentation: new vscode.MarkdownString(
            "Logical not operation.\n```js\nnot(x)\n```"
        ),
    },
    {
        label: "or",
        kind: vscode.CompletionItemKind.Function,
        detail: "Logical functions",
        documentation: new vscode.MarkdownString(
            "Logical or operation.\n```js\nor(x, y)\n```"
        ),
    },
    {
        label: "xor",
        kind: vscode.CompletionItemKind.Function,
        detail: "Logical functions",
        documentation: new vscode.MarkdownString(
            "Logical xor operation.\n```js\nxor(x, y)\n```"
        ),
    },

    // Matrix functions
    {
        label: "column",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Return a column from a matrix.\n```js\ncolumn(value, index)\n```"
        ),
    },
    {
        label: "concat",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Concatenate two or more matrices.\n```js\nconcat(a, b, c, ... [, dim])\n```"
        ),
    },
    {
        label: "count",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Count the number of elements in a matrix, array, or string.\n```js\ncount(x)\n```"
        ),
    },
    {
        label: "cross",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Calculate the cross product of two vectors.\n```js\ncross(x, y)\n```"
        ),
    },
    {
        label: "ctranspose",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Transpose and complex conjugate a matrix.\n```js\nctranspose(x)\n```"
        ),
    },
    {
        label: "det",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Calculate the determinant of a matrix.\n```js\ndet(x)\n```"
        ),
    },
    {
        label: "diag",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Create a diagonal matrix or retrieve the diagonal of a matrix.\n```js\ndiag(X)\n```"
        ),
    },
    {
        label: "diff",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Compute the difference between consecutive elements.\n```js\ndiff(arr)\n```"
        ),
    },
    {
        label: "dot",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Calculate the dot product of two vectors.\n```js\ndot(x, y)\n```"
        ),
    },
    {
        label: "eigs",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Compute eigenvalues and optionally eigenvectors of a square matrix.\n```js\neigs(x, [prec])\n```"
        ),
    },
    {
        label: "expm",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Compute the matrix exponential.\n```js\nexpm(x)\n```"
        ),
    },
    {
        label: "fft",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Calculate the N-dimensional Fourier transform.\n```js\nfft(arr)\n```"
        ),
    },
    {
        label: "filter",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Filter items in an array or matrix.\n```js\nfilter(x, test)\n```"
        ),
    },
    {
        label: "flatten",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Flatten a multidimensional matrix into a single dimension.\n```js\nflatten(x)\n```"
        ),
    },
    {
        label: "forEach",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Iterate over all elements of a matrix/array.\n```js\nforEach(x, callback)\n```"
        ),
    },
    {
        label: "getMatrixDataType",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Determine the data type of all elements in a matrix or array.\n```js\ngetMatrixDataType(x)\n```"
        ),
    },
    {
        label: "identity",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Create a 2D identity matrix.\n```js\nidentity(n)\n```"
        ),
    },
    {
        label: "ifft",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Calculate the inverse Fourier transform.\n```js\nifft(arr)\n```"
        ),
    },
    {
        label: "inv",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Calculate the inverse of a square matrix.\n```js\ninv(x)\n```"
        ),
    },
    {
        label: "kron",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Compute the Kronecker product of two matrices or vectors.\n```js\nkron(x, y)\n```"
        ),
    },
    {
        label: "map",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Apply a function to each entry of a matrix/array.\n```js\nmap(x, callback)\n```"
        ),
    },
    {
        label: "mapSlices",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Apply a function along a given axis of a matrix/array.\n```js\nmapSlices(A, dim, callback)\n```"
        ),
    },
    {
        label: "matrixFromColumns",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Create a dense matrix from column vectors.\n```js\nmatrixFromColumns(...arr)\n```"
        ),
    },
    {
        label: "matrixFromFunction",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Create a matrix by evaluating a function at each index.\n```js\nmatrixFromFunction(size, fn)\n```"
        ),
    },
    {
        label: "matrixFromRows",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Create a dense matrix from row vectors.\n```js\nmatrixFromRows(...arr)\n```"
        ),
    },
    {
        label: "ones",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Create a matrix filled with ones.\n```js\nones(m, n, p, ...)\n```"
        ),
    },
    {
        label: "partitionSelect",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Perform partition-based selection of an array or 1D matrix.\n```js\npartitionSelect(x, k)\n```"
        ),
    },
    {
        label: "pinv",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Calculate the Moore–Penrose inverse of a matrix.\n```js\npinv(x)\n```"
        ),
    },
    {
        label: "range",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Create an array from a range.\n```js\nrange(start, end [, step])\n```"
        ),
    },
    {
        label: "reshape",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Reshape a multidimensional array.\n```js\nreshape(x, sizes)\n```"
        ),
    },
    {
        label: "resize",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Resize a matrix.\n```js\nresize(x, size [, defaultValue])\n```"
        ),
    },
    {
        label: "rotate",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Rotate a vector counter-clockwise.\n```js\nrotate(w, theta)\n```"
        ),
    },
    {
        label: "rotationMatrix",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Create a 2D rotation matrix.\n```js\nrotationMatrix(theta)\n```"
        ),
    },
    {
        label: "row",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Return a row from a matrix.\n```js\nrow(value, index)\n```"
        ),
    },
    {
        label: "size",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Calculate the size of a matrix or scalar.\n```js\nsize(x)\n```"
        ),
    },
    {
        label: "sort",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Sort the elements in a matrix.\n```js\nsort(x)\n```"
        ),
    },
    {
        label: "sqrtm",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Calculate the principal square root of a square matrix.\n```js\nsqrtm(A)\n```"
        ),
    },
    {
        label: "squeeze",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Squeeze a matrix, removing singleton dimensions.\n```js\nsqueeze(x)\n```"
        ),
    },
    {
        label: "subset",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Get or set a subset of a matrix or string.\n```js\nsubset(x, index [, replacement])\n```"
        ),
    },
    {
        label: "trace",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Calculate the trace of a square matrix.\n```js\ntrace(x)\n```"
        ),
    },
    {
        label: "transpose",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Transpose a matrix.\n```js\ntranspose(x)\n```"
        ),
    },
    {
        label: "zeros",
        kind: vscode.CompletionItemKind.Function,
        detail: "Matrix functions",
        documentation: new vscode.MarkdownString(
            "Create a matrix filled with zeros.\n```js\nzeros(m, n, p, ...)\n```"
        ),
    },

    // Numeric functions
    {
        label: "solveODE",
        kind: vscode.CompletionItemKind.Function,
        detail: "Numeric functions",
        documentation: new vscode.MarkdownString(
            "Numerically integrate ODEs.\n```js\nsolveODE(func, tspan, y0)\n```"
        ),
    },

    // Probability functions
    {
        label: "combinations",
        kind: vscode.CompletionItemKind.Function,
        detail: "Probability functions",
        documentation: new vscode.MarkdownString(
            "Compute the number of ways to choose k unordered outcomes from n possibilities.\n```js\ncombinations(n, k)\n```"
        ),
    },
    {
        label: "combinationsWithRep",
        kind: vscode.CompletionItemKind.Function,
        detail: "Probability functions",
        documentation: new vscode.MarkdownString(
            "Compute combinations with repetition allowed.\n```js\ncombinationsWithRep(n, k)\n```"
        ),
    },
    {
        label: "factorial",
        kind: vscode.CompletionItemKind.Function,
        detail: "Probability functions",
        documentation: new vscode.MarkdownString(
            "Compute the factorial of a value.\n```js\nfactorial(n)\n```"
        ),
    },
    {
        label: "gamma",
        kind: vscode.CompletionItemKind.Function,
        detail: "Probability functions",
        documentation: new vscode.MarkdownString(
            "Compute the gamma function of a value.\n```js\ngamma(n)\n```"
        ),
    },
    {
        label: "kldivergence",
        kind: vscode.CompletionItemKind.Function,
        detail: "Probability functions",
        documentation: new vscode.MarkdownString(
            "Calculate the Kullback-Leibler divergence between two distributions.\n```js\nkldivergence(x, y)\n```"
        ),
    },
    {
        label: "lgamma",
        kind: vscode.CompletionItemKind.Function,
        detail: "Probability functions",
        documentation: new vscode.MarkdownString(
            "Compute the logarithm of the gamma function.\n```js\nlgamma(n)\n```"
        ),
    },
    {
        label: "multinomial",
        kind: vscode.CompletionItemKind.Function,
        detail: "Probability functions",
        documentation: new vscode.MarkdownString(
            "Compute multinomial coefficients.\n```js\nmultinomial(a)\n```"
        ),
    },
    {
        label: "permutations",
        kind: vscode.CompletionItemKind.Function,
        detail: "Probability functions",
        documentation: new vscode.MarkdownString(
            "Compute the number of ordered subsets from n elements.\n```js\npermutations(n [, k])\n```"
        ),
    },
    {
        label: "pickRandom",
        kind: vscode.CompletionItemKind.Function,
        detail: "Probability functions",
        documentation: new vscode.MarkdownString(
            "Randomly pick one or more values from an array.\n```js\npickRandom(array)\n```"
        ),
    },
    {
        label: "random",
        kind: vscode.CompletionItemKind.Function,
        detail: "Probability functions",
        documentation: new vscode.MarkdownString(
            "Return a random number in a given range.\n```js\nrandom([min, max])\n```"
        ),
    },
    {
        label: "randomInt",
        kind: vscode.CompletionItemKind.Function,
        detail: "Probability functions",
        documentation: new vscode.MarkdownString(
            "Return a random integer in a given range.\n```js\nrandomInt([min, max])\n```"
        ),
    },

    // Relational functions
    {
        label: "compare",
        kind: vscode.CompletionItemKind.Function,
        detail: "Relational functions",
        documentation: new vscode.MarkdownString(
            "Compare two values.\n```js\ncompare(x, y)\n```"
        ),
    },
    {
        label: "compareNatural",
        kind: vscode.CompletionItemKind.Function,
        detail: "Relational functions",
        documentation: new vscode.MarkdownString(
            "Compare two values in a natural order.\n```js\ncompareNatural(x, y)\n```"
        ),
    },
    {
        label: "compareText",
        kind: vscode.CompletionItemKind.Function,
        detail: "Relational functions",
        documentation: new vscode.MarkdownString(
            "Lexically compare two strings.\n```js\ncompareText(x, y)\n```"
        ),
    },
    {
        label: "deepEqual",
        kind: vscode.CompletionItemKind.Function,
        detail: "Relational functions",
        documentation: new vscode.MarkdownString(
            "Test element-wise equality of two matrices.\n```js\ndeepEqual(x, y)\n```"
        ),
    },
    {
        label: "equal",
        kind: vscode.CompletionItemKind.Function,
        detail: "Relational functions",
        documentation: new vscode.MarkdownString(
            "Test equality of two values.\n```js\nequal(x, y)\n```"
        ),
    },
    {
        label: "equalText",
        kind: vscode.CompletionItemKind.Function,
        detail: "Relational functions",
        documentation: new vscode.MarkdownString(
            "Check equality of two strings.\n```js\nequalText(x, y)\n```"
        ),
    },
    {
        label: "larger",
        kind: vscode.CompletionItemKind.Function,
        detail: "Relational functions",
        documentation: new vscode.MarkdownString(
            "Test if x is larger than y.\n```js\nlarger(x, y)\n```"
        ),
    },
    {
        label: "largerEq",
        kind: vscode.CompletionItemKind.Function,
        detail: "Relational functions",
        documentation: new vscode.MarkdownString(
            "Test if x is larger than or equal to y.\n```js\nlargerEq(x, y)\n```"
        ),
    },
    {
        label: "smaller",
        kind: vscode.CompletionItemKind.Function,
        detail: "Relational functions",
        documentation: new vscode.MarkdownString(
            "Test if x is smaller than y.\n```js\nsmaller(x, y)\n```"
        ),
    },
    {
        label: "smallerEq",
        kind: vscode.CompletionItemKind.Function,
        detail: "Relational functions",
        documentation: new vscode.MarkdownString(
            "Test if x is smaller than or equal to y.\n```js\nsmallerEq(x, y)\n```"
        ),
    },
    {
        label: "unequal",
        kind: vscode.CompletionItemKind.Function,
        detail: "Relational functions",
        documentation: new vscode.MarkdownString(
            "Test if two values are unequal.\n```js\nunequal(x, y)\n```"
        ),
    },

    // Set functions
    {
        label: "setCartesian",
        kind: vscode.CompletionItemKind.Function,
        detail: "Set functions",
        documentation: new vscode.MarkdownString(
            "Create the cartesian product of two sets.\n```js\nsetCartesian(set1, set2)\n```"
        ),
    },
    {
        label: "setDifference",
        kind: vscode.CompletionItemKind.Function,
        detail: "Set functions",
        documentation: new vscode.MarkdownString(
            "Create the difference of two sets.\n```js\nsetDifference(set1, set2)\n```"
        ),
    },
    {
        label: "setDistinct",
        kind: vscode.CompletionItemKind.Function,
        detail: "Set functions",
        documentation: new vscode.MarkdownString(
            "Collect distinct elements of a multiset.\n```js\nsetDistinct(set)\n```"
        ),
    },
    {
        label: "setIntersect",
        kind: vscode.CompletionItemKind.Function,
        detail: "Set functions",
        documentation: new vscode.MarkdownString(
            "Create the intersection of two sets.\n```js\nsetIntersect(set1, set2)\n```"
        ),
    },
    {
        label: "setIsSubset",
        kind: vscode.CompletionItemKind.Function,
        detail: "Set functions",
        documentation: new vscode.MarkdownString(
            "Check whether a set is a subset of another.\n```js\nsetIsSubset(set1, set2)\n```"
        ),
    },
    {
        label: "setMultiplicity",
        kind: vscode.CompletionItemKind.Function,
        detail: "Set functions",
        documentation: new vscode.MarkdownString(
            "Count the multiplicity of an element in a set.\n```js\nsetMultiplicity(element, set)\n```"
        ),
    },
    {
        label: "setPowerset",
        kind: vscode.CompletionItemKind.Function,
        detail: "Set functions",
        documentation: new vscode.MarkdownString(
            "Create the powerset of a set.\n```js\nsetPowerset(set)\n```"
        ),
    },
    {
        label: "setSize",
        kind: vscode.CompletionItemKind.Function,
        detail: "Set functions",
        documentation: new vscode.MarkdownString(
            "Count the number of elements in a set.\n```js\nsetSize(set)\n```"
        ),
    },
    {
        label: "setSymDifference",
        kind: vscode.CompletionItemKind.Function,
        detail: "Set functions",
        documentation: new vscode.MarkdownString(
            "Create the symmetric difference of two sets.\n```js\nsetSymDifference(set1, set2)\n```"
        ),
    },
    {
        label: "setUnion",
        kind: vscode.CompletionItemKind.Function,
        detail: "Set functions",
        documentation: new vscode.MarkdownString(
            "Create the union of two sets.\n```js\nsetUnion(set1, set2)\n```"
        ),
    },

    // Signal functions
    {
        label: "freqz",
        kind: vscode.CompletionItemKind.Function,
        detail: "Signal functions",
        documentation: new vscode.MarkdownString(
            "Calculate the frequency response of a filter.\n```js\nfreqz(b, a)\n```"
        ),
    },
    {
        label: "zpk2tf",
        kind: vscode.CompletionItemKind.Function,
        detail: "Signal functions",
        documentation: new vscode.MarkdownString(
            "Compute the transfer function of a zero-pole-gain model.\n```js\nzpk2tf(z, p, k)\n```"
        ),
    },

    // Special functions
    {
        label: "erf",
        kind: vscode.CompletionItemKind.Function,
        detail: "Special functions",
        documentation: new vscode.MarkdownString(
            "Compute the error function using Chebyshev approximations.\n```js\nerf(x)\n```"
        ),
    },
    {
        label: "zeta",
        kind: vscode.CompletionItemKind.Function,
        detail: "Special functions",
        documentation: new vscode.MarkdownString(
            "Compute the Riemann Zeta function.\n```js\nzeta(n)\n```"
        ),
    },

    // Statistics functions
    {
        label: "corr",
        kind: vscode.CompletionItemKind.Function,
        detail: "Statistics functions",
        documentation: new vscode.MarkdownString(
            "Compute the correlation coefficient of two lists or matrices.\n```js\ncorr(A, B)\n```"
        ),
    },
    {
        label: "cumsum",
        kind: vscode.CompletionItemKind.Function,
        detail: "Statistics functions",
        documentation: new vscode.MarkdownString(
            "Compute the cumulative sum of a matrix or list.\n```js\ncumsum(a, b, c, ...)\n```"
        ),
    },
    {
        label: "mad",
        kind: vscode.CompletionItemKind.Function,
        detail: "Statistics functions",
        documentation: new vscode.MarkdownString(
            "Compute the median absolute deviation.\n```js\nmad(a, b, c, ...)\n```"
        ),
    },
    {
        label: "max",
        kind: vscode.CompletionItemKind.Function,
        detail: "Statistics functions",
        documentation: new vscode.MarkdownString(
            "Compute the maximum value.\n```js\nmax(a, b, c, ...)\n```"
        ),
    },
    {
        label: "mean",
        kind: vscode.CompletionItemKind.Function,
        detail: "Statistics functions",
        documentation: new vscode.MarkdownString(
            "Compute the mean value.\n```js\nmean(a, b, c, ...)\n```"
        ),
    },
    {
        label: "median",
        kind: vscode.CompletionItemKind.Function,
        detail: "Statistics functions",
        documentation: new vscode.MarkdownString(
            "Compute the median.\n```js\nmedian(a, b, c, ...)\n```"
        ),
    },
    {
        label: "min",
        kind: vscode.CompletionItemKind.Function,
        detail: "Statistics functions",
        documentation: new vscode.MarkdownString(
            "Compute the minimum value.\n```js\nmin(a, b, c, ...)\n```"
        ),
    },
    {
        label: "mode",
        kind: vscode.CompletionItemKind.Function,
        detail: "Statistics functions",
        documentation: new vscode.MarkdownString(
            "Compute the mode of a set.\n```js\nmode(a, b, c, ...)\n```"
        ),
    },
    {
        label: "prod",
        kind: vscode.CompletionItemKind.Function,
        detail: "Statistics functions",
        documentation: new vscode.MarkdownString(
            "Compute the product of values.\n```js\nprod(a, b, c, ...)\n```"
        ),
    },
    {
        label: "quantileSeq",
        kind: vscode.CompletionItemKind.Function,
        detail: "Statistics functions",
        documentation: new vscode.MarkdownString(
            "Compute a quantile of a matrix or list.\n```js\nquantileSeq(A, prob[, sorted])\n```"
        ),
    },
    {
        label: "std",
        kind: vscode.CompletionItemKind.Function,
        detail: "Statistics functions",
        documentation: new vscode.MarkdownString(
            "Compute the standard deviation.\n```js\nstd(a, b, c, ...)\n```"
        ),
    },
    {
        label: "sum",
        kind: vscode.CompletionItemKind.Function,
        detail: "Statistics functions",
        documentation: new vscode.MarkdownString(
            "Compute the sum of values.\n```js\nsum(a, b, c, ...)\n```"
        ),
    },
    {
        label: "variance",
        kind: vscode.CompletionItemKind.Function,
        detail: "Statistics functions",
        documentation: new vscode.MarkdownString(
            "Compute the variance.\n```js\nvariance(a, b, c, ...)\n```"
        ),
    },

    // String functions
    {
        label: "bin",
        kind: vscode.CompletionItemKind.Function,
        detail: "String functions",
        documentation: new vscode.MarkdownString(
            "Format a number as binary.\n```js\nbin(value)\n```"
        ),
    },
    {
        label: "format",
        kind: vscode.CompletionItemKind.Function,
        detail: "String functions",
        documentation: new vscode.MarkdownString(
            "Format a value into a string.\n```js\nformat(value [, precision])\n```"
        ),
    },
    {
        label: "hex",
        kind: vscode.CompletionItemKind.Function,
        detail: "String functions",
        documentation: new vscode.MarkdownString(
            "Format a number as hexadecimal.\n```js\nhex(value)\n```"
        ),
    },
    {
        label: "oct",
        kind: vscode.CompletionItemKind.Function,
        detail: "String functions",
        documentation: new vscode.MarkdownString(
            "Format a number as octal.\n```js\noct(value)\n```"
        ),
    },
    {
        label: "print",
        kind: vscode.CompletionItemKind.Function,
        detail: "String functions",
        documentation: new vscode.MarkdownString(
            "Interpolate values into a string template.\n```js\nprint(template, values [, precision])\n```"
        ),
    },

    // Trigonometry functions
    {
        label: "acos",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the inverse cosine.\n```js\nacos(x)\n```"
        ),
    },
    {
        label: "acosh",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the hyperbolic arccos.\n```js\nacosh(x)\n```"
        ),
    },
    {
        label: "acot",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the inverse cotangent.\n```js\nacot(x)\n```"
        ),
    },
    {
        label: "acoth",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the inverse hyperbolic cotangent.\n```js\nacoth(x)\n```"
        ),
    },
    {
        label: "acsc",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the inverse cosecant.\n```js\nacsc(x)\n```"
        ),
    },
    {
        label: "acsch",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the inverse hyperbolic cosecant.\n```js\nacsch(x)\n```"
        ),
    },
    {
        label: "asec",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the inverse secant.\n```js\nasec(x)\n```"
        ),
    },
    {
        label: "asech",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the hyperbolic arcsecant.\n```js\nasech(x)\n```"
        ),
    },
    {
        label: "asin",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the inverse sine.\n```js\nasin(x)\n```"
        ),
    },
    {
        label: "asinh",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the hyperbolic arcsine.\n```js\nasinh(x)\n```"
        ),
    },
    {
        label: "atan",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the inverse tangent.\n```js\natan(x)\n```"
        ),
    },
    {
        label: "atan2",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the inverse tangent with two arguments.\n```js\natan2(y, x)\n```"
        ),
    },
    {
        label: "atanh",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the hyperbolic arctangent.\n```js\natanh(x)\n```"
        ),
    },
    {
        label: "cos",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the cosine of a value.\n```js\ncos(x)\n```"
        ),
    },
    {
        label: "cosh",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the hyperbolic cosine.\n```js\ncosh(x)\n```"
        ),
    },
    {
        label: "cot",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the cotangent of a value.\n```js\ncot(x)\n```"
        ),
    },
    {
        label: "coth",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the hyperbolic cotangent.\n```js\ncoth(x)\n```"
        ),
    },
    {
        label: "csc",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the cosecant of a value.\n```js\ncsc(x)\n```"
        ),
    },
    {
        label: "csch",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the hyperbolic cosecant of a value.\n```js\ncsch(x)\n```"
        ),
    },
    {
        label: "sec",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the secant of a value.\n```js\nsec(x)\n```"
        ),
    },
    {
        label: "sech",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the hyperbolic secant of a value.\n```js\nsech(x)\n```"
        ),
    },
    {
        label: "sin",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the sine of a value.\n```js\nsin(x)\n```"
        ),
    },
    {
        label: "sinh",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the hyperbolic sine of a value.\n```js\nsinh(x)\n```"
        ),
    },
    {
        label: "tan",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the tangent of a value.\n```js\ntan(x)\n```"
        ),
    },
    {
        label: "tanh",
        kind: vscode.CompletionItemKind.Function,
        detail: "Trigonometry functions",
        documentation: new vscode.MarkdownString(
            "Calculate the hyperbolic tangent of a value.\n```js\ntanh(x)\n```"
        ),
    },

    // Unit functions
    {
        label: "to",
        kind: vscode.CompletionItemKind.Function,
        detail: "Unit functions",
        documentation: new vscode.MarkdownString(
            "Convert a value to a different unit.\n```js\nto(x, unit)\n```"
        ),
    },

    // Utils functions
    {
        label: "clone",
        kind: vscode.CompletionItemKind.Function,
        detail: "Utils functions",
        documentation: new vscode.MarkdownString(
            "Clone an object.\n```js\nclone(x)\n```"
        ),
    },
    {
        label: "hasNumericValue",
        kind: vscode.CompletionItemKind.Function,
        detail: "Utils functions",
        documentation: new vscode.MarkdownString(
            "Test whether a value has a numeric value.\n```js\nhasNumericValue(x)\n```"
        ),
    },
    {
        label: "isInteger",
        kind: vscode.CompletionItemKind.Function,
        detail: "Utils functions",
        documentation: new vscode.MarkdownString(
            "Test whether a value is an integer.\n```js\nisInteger(x)\n```"
        ),
    },
    {
        label: "isNaN",
        kind: vscode.CompletionItemKind.Function,
        detail: "Utils functions",
        documentation: new vscode.MarkdownString(
            "Test whether a value is NaN.\n```js\nisNaN(x)\n```"
        ),
    },
    {
        label: "isNegative",
        kind: vscode.CompletionItemKind.Function,
        detail: "Utils functions",
        documentation: new vscode.MarkdownString(
            "Test whether a value is negative.\n```js\nisNegative(x)\n```"
        ),
    },
    {
        label: "isNumeric",
        kind: vscode.CompletionItemKind.Function,
        detail: "Utils functions",
        documentation: new vscode.MarkdownString(
            "Test whether a value is numeric.\n```js\nisNumeric(x)\n```"
        ),
    },
    {
        label: "isPositive",
        kind: vscode.CompletionItemKind.Function,
        detail: "Utils functions",
        documentation: new vscode.MarkdownString(
            "Test whether a value is positive.\n```js\nisPositive(x)\n```"
        ),
    },
    {
        label: "isPrime",
        kind: vscode.CompletionItemKind.Function,
        detail: "Utils functions",
        documentation: new vscode.MarkdownString(
            "Test whether a value is prime.\n```js\nisPrime(x)\n```"
        ),
    },
    {
        label: "isZero",
        kind: vscode.CompletionItemKind.Function,
        detail: "Utils functions",
        documentation: new vscode.MarkdownString(
            "Test whether a value is zero.\n```js\nisZero(x)\n```"
        ),
    },
    {
        label: "numeric",
        kind: vscode.CompletionItemKind.Function,
        detail: "Utils functions",
        documentation: new vscode.MarkdownString(
            "Convert a numeric input to a specific type.\n```js\nnumeric(x)\n```"
        ),
    },
    {
        label: "typeOf",
        kind: vscode.CompletionItemKind.Function,
        detail: "Utils functions",
        documentation: new vscode.MarkdownString(
            "Determine the type of an entity.\n```js\ntypeOf(x)\n```"
        ),
    },
];
