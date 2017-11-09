var app = new Vue({
    el: '#app',
    data: {
        columns: [{
                title: '姓名',
                key: 'name'
            },
            {
                title: '年龄',
                key: 'age',
                sortable: true
            }, {
                title: '出生日期',
                key: 'birthday'
            },{
                title: '地址',
                key: 'address'
            }
        ],
        data: [{
                name: '王小明',
                age: 30,
                birthday: '1999-02-21',
                address: '北京市朝阳区芍药居'
            },
            {
                name: '张小刚',
                age: 25,
                birthday: '1992-03-21',
                address: '北京市海淀区西二旗'
            }
        ]
    }
})