    // 根据数组动态生成页面
    const arr = [{
        id: 1,
        name: '凌不疑',
        condition: '糖',
        score: 3,
    },
    
];

// 获取标签对象 
const oTbody = document.querySelector('tbody');

// 获取 新增相关 标签对象
const oAdd = document.querySelector('.add');
// 确定按钮
const oBtnEnsure = oAdd.querySelectorAll('button')[0];
// 重置按钮
const oBtnReset = oAdd.querySelectorAll('button')[1];
const oIptName = oAdd.querySelector('[name="name"]');
const oIptscore = oAdd.querySelector('[name="score"]');
const oIptCon = oAdd.querySelectorAll('[name="condition"]');

// 获取 修改相关 标签对象
const oChange = document.querySelector('.change');
// 确定按钮
const oBtnEnsureChange = oChange.querySelectorAll('button')[0];
// 取消按钮
const oBtnCancelChange = oChange.querySelectorAll('button')[1];
const oIptNameChange = oChange.querySelector('[name="name"]');
const oIptscoreChange = oChange.querySelector('[name="score"]');
const oIptConChange = oChange.querySelectorAll('[name="condition"]');
const oOptChange = oChange.querySelectorAll('option');

// 定义一个变量 
// 存储 修改标签 对应的索引下标 
let index;
// 调用函数动态渲染生成页面
setPage();


// 封装函数 动态渲染生成页面
function setPage() {
    // 空数组 生成 对应的 空内容
    if (arr.length === 0) {
        oTbody.innerHTML = '<tr><td colspan="7">没有匹配数据</td></tr>';
        return;
    }
    let str = '';
    arr.forEach(function (item, key) {
        str += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.condition}</td>
                <td>${item.score}</td>

                <td><button name="del" index="${key}">删除</button></td>
                <td><button name="change" index="${key}">修改</button></td>
            </tr>
        `;
    })
    oTbody.innerHTML = str;
}

// 新增
// 给确定按钮添加点击事件
oBtnEnsure.addEventListener('click', function () {
    // 弹出确认框，点击确定之后，再执行程序
    // 也就是 window.confirm() 的返回值是true，再执行程序
    if (window.confirm('您确定要添加吗?')) {
        // 获取数据 
        // 获取 姓名
        let name = oIptName.value;
        console.log(name);
        // 获取 程度 转化为数值类型
        let score = oIptscore.value - 0;
        // 获取 性别
        let condition;
        for (let i = 0; i <= oIptCon.length - 1; i++) {
            if (oIptCon[i].checked) {
                condition = oIptCon[i].value;
                break;
            }
        }

        let id = arr[arr.length - 1].id + 1;
        // 生成一个对象，写入数组的末位
        arr.push({
            id: id,
            name: name,
            condition:condition,
            score: score,
        })
        console.log(arr);
        // 再次调用函数，动态渲染生成新的页面
        setPage();
    }
})
// 给重置按钮添加点击事件
oBtnReset.addEventListener('click', function () {
    oIptName.value = '';
    oIptscore.value = '';
    for (let i = 0; i <= oIptCon.length - 1; i++) {
        oIptCon[i].checked = false;
    }
})

// 给<tbody>标签添加点击事件
// 通过事件委托实现项目需求
oTbody.addEventListener('click', function (e) {
    // 根据 e.target不同的name，判断点击的是什么标签，执行不同程序

    // 删除程序
    if (e.target.getAttribute('name') === 'del') {
        // 弹出确认框，点击确定后再执行删除程序
        if (!window.confirm('您确定要删除吗?')) {
            return;
        }
        // 在数组中按照点击删除按钮存储的索引下标，删除一个单元
        arr.splice(Number(e.target.getAttribute('index')), 1);
        // 根据新数组，动态渲染生成页面
        setPage();

        // 修改程序
    } else if (e.target.getAttribute('name') === 'change') {
        // 让修改的div标签出现
        oChange.style.display = 'flex'; // css样式中用了弹性盒子，所以这里要用display:flex
        // 给变量赋值存储修改标签对应的索引下标
        index = Number(e.target.getAttribute('index'));

        // 显示要修改的原始数据
        // 姓名、程度，直接赋值 
        oIptNameChange.value = arr[index].name;
        oIptscoreChange.value = arr[index].score;
        // 循环遍历存储性别的 input伪数组
        // 哪个标签的 value和数组对象中 condition的键值相同，就添加 checked，默认选中。
        for (let i = 0; i <= oIptConChange.length - 1; i++) {
            if (oIptConChange[i].value === arr[index].condition) {
                oIptConChange[i].checked = true;
                // 终止循环
                break;
            }
        }
    
    }
})

// 给修改页面里面的 确定按钮添加点击事件
oBtnEnsureChange.addEventListener('click', function () {
    // 弹出确认框，点击确定再执行程序
    if (window.confirm('您确定要修改吗?')) {
        // 获取 修改标签中的数据数值
        // 获取 姓名
        let name = oIptNameChange.value;
        // 获取 程度，转化为数值类型
        let score = oIptscoreChange.value - 0;


        let condition;
        for (let i = 0; i <= oIptConChange.length - 1; i++) {
            if (oIptConChange[i].checked) {
                condition = oIptConChange[i].value;
                break;
            }
        }
        // 修改点击的修改标签中 存储的索引下标对应的数组中的对象所存储的数据
        arr[index].name = name;
        arr[index].score = score;
        arr[index].condition = condition;
        // 调用函数 根据新的数组动态渲染生成页面
        setPage();
        // 让 修改 页面 再次隐藏
        oChange.style.display = 'none';
    }
})
// 给修改的取消按钮添加点击事件
oBtnCancelChange.addEventListener('click', function () {
    // 让修改 页面 隐藏
    oChange.style.display = 'none';
})