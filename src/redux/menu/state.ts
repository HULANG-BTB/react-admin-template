export interface Permission {
  id: string
  parentId: string | null
  name: string
  openMode: number | null
  displaySort: number
  category: boolean
  leaf: boolean
  function: {
    id: string
    code: string
    name: string
    url: string
  } | null
  functionItems: Array<{
    id: string
    code: string
    name: string
    enabled: boolean
  }> | null
}

export interface MenuState {
  menus: Permission[]
}

export const state: MenuState = {
  menus: [
    {
      id: '613015803075231782',
      parentId: null,
      name: '系统管理',
      openMode: 0,
      displaySort: 1,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '613015803075231784',
      parentId: '613015803075231806',
      name: '开票点管理',
      openMode: 0,
      displaySort: 1,
      category: false,
      leaf: true,
      function: {
        id: '593152060367568896',
        code: 'basic:place',
        name: '开票点管理',
        url: ''
      },
      functionItems: [
        {
          id: '192451018625646592',
          code: 'basic:place:add',
          name: '新增',
          enabled: true
        },
        {
          id: '192451018625646594',
          code: 'basic:place:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '192451018625646598',
          code: 'basic:place:download',
          name: '下载模板',
          enabled: true
        },
        {
          id: '192451018625646599',
          code: 'basic:place:downloadFailure',
          name: '下载失败记录',
          enabled: true
        },
        {
          id: '192451018625646593',
          code: 'basic:place:edit',
          name: '编辑',
          enabled: true
        },
        {
          id: '192451018625646597',
          code: 'basic:place:emergency',
          name: '应急开票点',
          enabled: true
        },
        {
          id: '192451018625646596',
          code: 'basic:place:hangSet',
          name: '挂接设置',
          enabled: true
        },
        {
          id: '192451018625646595',
          code: 'basic:place:import',
          name: '导入',
          enabled: true
        }
      ]
    },
    {
      id: '613015803075231817',
      parentId: '613015803075231816',
      name: '票据库存查询',
      openMode: 0,
      displaySort: 1,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1138146782748950625',
      parentId: '1138146782748950623',
      name: '凭证基础信息',
      openMode: null,
      displaySort: 1,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1530232526134624903',
      parentId: '615516642272608256',
      name: '电子票据交付',
      openMode: 0,
      displaySort: 1,
      category: false,
      leaf: true,
      function: {
        id: '1530232526134624758',
        code: 'report:notice:eBillDeliver',
        name: '电子票据交付',
        url: ''
      },
      functionItems: [
        {
          id: '1530232526134624895',
          code: 'report:notice:eBillDeliver:batchDownload',
          name: '批量下载',
          enabled: true
        },
        {
          id: '1530232526134624897',
          code: 'report:notice:eBillDeliver:batchNotice',
          name: '批量通知',
          enabled: true
        },
        {
          id: '1530232526134624900',
          code: 'report:notice:eBillDeliver:notice',
          name: '单条通知',
          enabled: true
        }
      ]
    },
    {
      id: '613015803075231783',
      parentId: null,
      name: '基础信息',
      openMode: null,
      displaySort: 2,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '613015803075231788',
      parentId: '613015803075231806',
      name: '常用交款人',
      openMode: 0,
      displaySort: 2,
      category: false,
      leaf: true,
      function: {
        id: '601056105862266902',
        code: 'basic:payer',
        name: '常用交款人',
        url: ''
      },
      functionItems: [
        {
          id: '192451018625646600',
          code: 'basic:payer:add',
          name: '新增',
          enabled: true
        },
        {
          id: '192451018625646602',
          code: 'basic:payer:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '192451018625646604',
          code: 'basic:payer:download',
          name: '下载模板',
          enabled: true
        },
        {
          id: '192451018625646605',
          code: 'basic:payer:downloadFailure',
          name: '下载失败记录',
          enabled: true
        },
        {
          id: '192451018625646601',
          code: 'basic:payer:edit',
          name: '编辑',
          enabled: true
        },
        {
          id: '192451018625646603',
          code: 'basic:payer:import',
          name: '导入',
          enabled: true
        }
      ]
    },
    {
      id: '613015803075231820',
      parentId: '613015803075231816',
      name: '票据开具查询',
      openMode: null,
      displaySort: 2,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '981719366544458904',
      parentId: '615516642272608256',
      name: '交付渠道查询',
      openMode: 0,
      displaySort: 2,
      category: false,
      leaf: true,
      function: {
        id: '981719366544458835',
        code: 'deliver:channel',
        name: '交付渠道查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1138146782748950627',
      parentId: '1138146782748950623',
      name: '凭证管理',
      openMode: null,
      displaySort: 2,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '613015803075231789',
      parentId: '613015803075231806',
      name: '收费明细管理',
      openMode: 0,
      displaySort: 3,
      category: false,
      leaf: true,
      function: {
        id: '601056105862266903',
        code: 'basic:assist',
        name: '收费明细管理',
        url: ''
      },
      functionItems: [
        {
          id: '192451018625646606',
          code: 'basic:assist:add',
          name: '新增',
          enabled: true
        },
        {
          id: '192451018625646608',
          code: 'basic:assist:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '192451018625646609',
          code: 'basic:assist:deleteBatch',
          name: '批量删除',
          enabled: true
        },
        {
          id: '192451018625646611',
          code: 'basic:assist:download',
          name: '下载模板',
          enabled: true
        },
        {
          id: '192451018625646612',
          code: 'basic:assist:downloadFailure',
          name: '下载失败记录',
          enabled: true
        },
        {
          id: '192451018625646607',
          code: 'basic:assist:edit',
          name: '编辑',
          enabled: true
        },
        {
          id: '192451018625646610',
          code: 'basic:assist:import',
          name: '导入',
          enabled: true
        }
      ]
    },
    {
      id: '613015803075231794',
      parentId: null,
      name: '票据管理',
      openMode: null,
      displaySort: 3,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1088981192599962000',
      parentId: '615516642272608256',
      name: '票据通知交付查询',
      openMode: 0,
      displaySort: 3,
      category: false,
      leaf: true,
      function: {
        id: '1088981192599961616',
        code: 'report:notice:billDeliver',
        name: '票据通知交付查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1613558362010607790',
      parentId: '613015803075231816',
      name: '收缴情况查询',
      openMode: null,
      displaySort: 3,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '613015803075231785',
      parentId: '613015803075231782',
      name: '用户管理',
      openMode: 0,
      displaySort: 4,
      category: false,
      leaf: true,
      function: {
        id: '601056105862266881',
        code: 'auth:user',
        name: '用户管理',
        url: ''
      },
      functionItems: [
        {
          id: '601056105862266882',
          code: 'auth:user:add',
          name: '新增',
          enabled: true
        },
        {
          id: '601056105862266884',
          code: 'auth:user:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '601056105862266886',
          code: 'auth:user:disable',
          name: '禁用',
          enabled: true
        },
        {
          id: '601056105862266883',
          code: 'auth:user:edit',
          name: '编辑',
          enabled: true
        },
        {
          id: '601056105862266885',
          code: 'auth:user:enable',
          name: '启用',
          enabled: true
        },
        {
          id: '601056105862266887',
          code: 'auth:user:reset',
          name: '重置密码',
          enabled: true
        },
        {
          id: '601056105862266888',
          code: 'auth:user:role:add',
          name: '角色挂接',
          enabled: true
        },
        {
          id: '1243400213377368065',
          code: 'auth:user:unlock',
          name: '解锁',
          enabled: true
        }
      ]
    },
    {
      id: '613015803075231790',
      parentId: '613015803075231806',
      name: '收费明细分组',
      openMode: 0,
      displaySort: 4,
      category: false,
      leaf: true,
      function: {
        id: '601056105862266904',
        code: 'basic:assistGroup',
        name: '收费明细分组',
        url: ''
      },
      functionItems: [
        {
          id: '192451018625646613',
          code: 'basic:assistGroup:add',
          name: '新增',
          enabled: true
        },
        {
          id: '192451018625646615',
          code: 'basic:assistGroup:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '192451018625646614',
          code: 'basic:assistGroup:edit',
          name: '编辑',
          enabled: true
        }
      ]
    },
    {
      id: '613015803075231800',
      parentId: null,
      name: '开票管理',
      openMode: null,
      displaySort: 4,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '737595968060391655',
      parentId: '613015803075231816',
      name: '应急开票查询',
      openMode: null,
      displaySort: 4,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1096727698694283744',
      parentId: '613015803075231820',
      name: '医疗票据明细查询',
      openMode: 0,
      displaySort: 4,
      category: false,
      leaf: true,
      function: {
        id: '1096727698694283266',
        code: 'report:invoice:medicalDetail',
        name: '医疗票据明细查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1114644790424674997',
      parentId: '1138146782748950623',
      name: '报表查询',
      openMode: null,
      displaySort: 4,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '613015803075231786',
      parentId: '613015803075231782',
      name: '角色管理',
      openMode: 0,
      displaySort: 5,
      category: false,
      leaf: true,
      function: {
        id: '601056105862266889',
        code: 'auth:role',
        name: '角色管理',
        url: ''
      },
      functionItems: [
        {
          id: '601056105862266890',
          code: 'auth:role:add',
          name: '新增',
          enabled: true
        },
        {
          id: '601056105862266893',
          code: 'auth:role:auth',
          name: '授权',
          enabled: true
        },
        {
          id: '601056105862266892',
          code: 'auth:role:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '601056105862266895',
          code: 'auth:role:disable',
          name: '停用',
          enabled: true
        },
        {
          id: '601056105862266891',
          code: 'auth:role:edit',
          name: '编辑',
          enabled: true
        },
        {
          id: '601056105862266894',
          code: 'auth:role:enable',
          name: '启用',
          enabled: true
        }
      ]
    },
    {
      id: '613015803075231791',
      parentId: '613015803075231806',
      name: '项目分组',
      openMode: 0,
      displaySort: 5,
      category: false,
      leaf: true,
      function: {
        id: '601056105862266905',
        code: 'basic:group',
        name: '项目分组',
        url: ''
      },
      functionItems: [
        {
          id: '192451018625646616',
          code: 'basic:group:add',
          name: '新增',
          enabled: true
        },
        {
          id: '192451018625646618',
          code: 'basic:group:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '192451018625646617',
          code: 'basic:group:edit',
          name: '编辑',
          enabled: true
        }
      ]
    },
    {
      id: '1403070914005877072',
      parentId: '613015803075231816',
      name: '移动收款开票查询',
      openMode: null,
      displaySort: 5,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1614478275285934454',
      parentId: null,
      name: '收缴管理',
      openMode: null,
      displaySort: 5,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '613015803075231787',
      parentId: '613015803075231782',
      name: '菜单管理',
      openMode: 0,
      displaySort: 6,
      category: false,
      leaf: true,
      function: {
        id: '601056105862266896',
        code: 'auth:permission',
        name: '菜单管理',
        url: ''
      },
      functionItems: [
        {
          id: '601056105862266897',
          code: 'auth:permission:add',
          name: '新增',
          enabled: true
        },
        {
          id: '601056105862266899',
          code: 'auth:permission:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '601056105862266901',
          code: 'auth:permission:disable',
          name: '禁用',
          enabled: true
        },
        {
          id: '601056105862266898',
          code: 'auth:permission:edit',
          name: '编辑',
          enabled: true
        },
        {
          id: '601056105862266900',
          code: 'auth:permission:enable',
          name: '启用',
          enabled: true
        }
      ]
    },
    {
      id: '613015803075231792',
      parentId: '613015803075231806',
      name: '业务科室管理',
      openMode: 0,
      displaySort: 6,
      category: false,
      leaf: true,
      function: {
        id: '601056105862266906',
        code: 'basic:department',
        name: '业务科室管理',
        url: ''
      },
      functionItems: [
        {
          id: '192451018625646619',
          code: 'basic:department:add',
          name: '新增',
          enabled: true
        },
        {
          id: '192451018625646621',
          code: 'basic:department:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '192451018625646620',
          code: 'basic:department:edit',
          name: '编辑',
          enabled: true
        }
      ]
    },
    {
      id: '613015803075231813',
      parentId: null,
      name: '对账管理',
      openMode: null,
      displaySort: 6,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1096727698694283746',
      parentId: '613015803075231820',
      name: '医疗票据汇总查询',
      openMode: 0,
      displaySort: 6,
      category: false,
      leaf: true,
      function: {
        id: '1096727698694283466',
        code: 'report:invoice:medicalSummary',
        name: '医疗票据汇总查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '613015803075231793',
      parentId: '613015803075231806',
      name: '复核人管理',
      openMode: 0,
      displaySort: 7,
      category: false,
      leaf: true,
      function: {
        id: '601056105862266907',
        code: 'basic:reviewer',
        name: '复核人管理',
        url: ''
      },
      functionItems: [
        {
          id: '192451018625646622',
          code: 'basic:reviewer:add',
          name: '新增',
          enabled: true
        },
        {
          id: '192451018625646623',
          code: 'basic:reviewer:edit',
          name: '编辑',
          enabled: true
        },
        {
          id: '981719366544457962',
          code: 'basic:reviewer:enabled',
          name: '启停用',
          enabled: true
        }
      ]
    },
    {
      id: '613015803075231816',
      parentId: null,
      name: '报表查询',
      openMode: null,
      displaySort: 7,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1231081078941335676',
      parentId: '613015803075231806',
      name: '财政印章维护',
      openMode: 0,
      displaySort: 8,
      category: false,
      leaf: true,
      function: {
        id: '1231081078941335553',
        code: 'basic:financeSeal',
        name: '财政印章维护',
        url: ''
      },
      functionItems: [
        {
          id: '1231081078941335559',
          code: 'basic:financeSeal:add',
          name: '新增',
          enabled: true
        },
        {
          id: '1231081078941335563',
          code: 'basic:financeSeal:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '1231081078941335567',
          code: 'basic:financeSeal:download',
          name: '下载',
          enabled: true
        },
        {
          id: '1231081078941335561',
          code: 'basic:financeSeal:edit',
          name: '修改',
          enabled: true
        },
        {
          id: '1231081078941335565',
          code: 'basic:financeSeal:enabled',
          name: '启用/停用',
          enabled: true
        }
      ]
    },
    {
      id: '1614478275285934468',
      parentId: null,
      name: '单位监管分析',
      openMode: null,
      displaySort: 8,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1138146782748950623',
      parentId: null,
      name: '电子凭证',
      openMode: null,
      displaySort: 9,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '735289708061393153',
      parentId: null,
      name: '档案管理',
      openMode: null,
      displaySort: 10,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '737595968060391889',
      parentId: '613015803075231806',
      name: '应急开票基础信息',
      openMode: 0,
      displaySort: 10,
      category: false,
      leaf: true,
      function: {
        id: '737595968060391813',
        code: 'miniBill:basic:sync',
        name: '应急开票基础信息',
        url: ''
      },
      functionItems: []
    },
    {
      id: '613015803075231799',
      parentId: '613015803075231806',
      name: '库存管理设置',
      openMode: 0,
      displaySort: 11,
      category: false,
      leaf: true,
      function: {
        id: '601056105862266913',
        code: 'stock:stockWarningSetting',
        name: '库存管理设置',
        url: ''
      },
      functionItems: [
        {
          id: '192451018625646641',
          code: 'stock:warning:add',
          name: '新增',
          enabled: true
        },
        {
          id: '192451018625646642',
          code: 'stock:warning:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '1237238103538688001',
          code: 'stock:warning:update',
          name: '修改',
          enabled: true
        }
      ]
    },
    {
      id: '744161151989841921',
      parentId: null,
      name: '移动应用',
      openMode: null,
      displaySort: 11,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '613015803075231795',
      parentId: '613015803075231807',
      name: '期初库存',
      openMode: 0,
      displaySort: 14,
      category: false,
      leaf: true,
      function: {
        id: '601056105862266909',
        code: 'stock:stockBegin',
        name: '期初库存',
        url: ''
      },
      functionItems: [
        {
          id: '192451018625646625',
          code: 'stock:stockBegin:add',
          name: '新增',
          enabled: true
        },
        {
          id: '192451018625646629',
          code: 'stock:stockBegin:check',
          name: '审核',
          enabled: true
        },
        {
          id: '192451018625646626',
          code: 'stock:stockBegin:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '192451018625646627',
          code: 'stock:stockBegin:edit',
          name: '修改',
          enabled: true
        },
        {
          id: '192451018625646628',
          code: 'stock:stockBegin:report',
          name: '上报',
          enabled: true
        }
      ]
    },
    {
      id: '613015803075231796',
      parentId: '613015803075231807',
      name: '票据申领',
      openMode: 0,
      displaySort: 15,
      category: false,
      leaf: true,
      function: {
        id: '601056105862266910',
        code: 'stock:stockApply',
        name: '票据申领',
        url: ''
      },
      functionItems: [
        {
          id: '192451018625646630',
          code: 'stock:stockApply:add',
          name: '新增',
          enabled: true
        },
        {
          id: '758181574617145584',
          code: 'stock:stockApply:cancelCheck',
          name: '取消审核',
          enabled: true
        },
        {
          id: '758181574617145582',
          code: 'stock:stockApply:cancelReport',
          name: '撤销上报',
          enabled: true
        },
        {
          id: '192451018625646634',
          code: 'stock:stockApply:check',
          name: '审核',
          enabled: true
        },
        {
          id: '192451018625646631',
          code: 'stock:stockApply:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '192451018625646632',
          code: 'stock:stockApply:edit',
          name: '修改',
          enabled: true
        },
        {
          id: '192451018625646633',
          code: 'stock:stockApply:report',
          name: '上报',
          enabled: true
        }
      ]
    },
    {
      id: '613015803075231798',
      parentId: '613015803075231807',
      name: '票据入库',
      openMode: 0,
      displaySort: 15,
      category: false,
      leaf: true,
      function: {
        id: '601056105862266912',
        code: 'stock:stockIn',
        name: '票据入库',
        url: ''
      },
      functionItems: [
        {
          id: '192451018625646640',
          code: 'stock:stockIn:confirm',
          name: '确认',
          enabled: true
        }
      ]
    },
    {
      id: '613015803075231797',
      parentId: '613015803075231807',
      name: '票据分发',
      openMode: 0,
      displaySort: 16,
      category: false,
      leaf: true,
      function: {
        id: '601056105862266911',
        code: 'stock:stockOut',
        name: '票据分发',
        url: ''
      },
      functionItems: [
        {
          id: '192451018625646635',
          code: 'stock:stockOut:add',
          name: '新增',
          enabled: true
        },
        {
          id: '192451018625646639',
          code: 'stock:stockOut:cancelHandout',
          name: '撤回下发',
          enabled: true
        },
        {
          id: '192451018625646636',
          code: 'stock:stockOut:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '192451018625646637',
          code: 'stock:stockOut:edit',
          name: '修改',
          enabled: true
        },
        {
          id: '192451018625646638',
          code: 'stock:stockOut:handout',
          name: '下发',
          enabled: true
        }
      ]
    },
    {
      id: '613015803075231802',
      parentId: '613015803075231783',
      name: '财政基础信息',
      openMode: null,
      displaySort: 21,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '613015803075231803',
      parentId: '613015803075231802',
      name: '单位信息查询',
      openMode: 0,
      displaySort: 22,
      category: false,
      leaf: true,
      function: {
        id: '606392654267154437',
        code: 'basic:deptInfo',
        name: '单位信息查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '613015803075231804',
      parentId: '613015803075231802',
      name: '票据种类查询',
      openMode: 0,
      displaySort: 23,
      category: false,
      leaf: true,
      function: {
        id: '606392654267154435',
        code: 'basic:billInfo',
        name: '票据种类查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '613015803075231805',
      parentId: '613015803075231802',
      name: '收入项目查询',
      openMode: 0,
      displaySort: 24,
      category: false,
      leaf: true,
      function: {
        id: '606392654267154436',
        code: 'basic:itemInfo',
        name: '收入项目查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '613015803075231806',
      parentId: '613015803075231783',
      name: '单位基础信息',
      openMode: null,
      displaySort: 25,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '613015803075231807',
      parentId: '613015803075231794',
      name: '票据库存',
      openMode: null,
      displaySort: 26,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '613015803075231814',
      parentId: '613015803075231813',
      name: '归档管理',
      openMode: null,
      displaySort: 35,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '613015803075231818',
      parentId: '613015803075231817',
      name: '库存结余查询',
      openMode: 0,
      displaySort: 39,
      category: false,
      leaf: true,
      function: {
        id: '606392654267154439',
        code: 'report:stock:stockBalance',
        name: '库存结余表',
        url: ''
      },
      functionItems: []
    },
    {
      id: '613015803075231819',
      parentId: '613015803075231817',
      name: '库存不足预警查询',
      openMode: 0,
      displaySort: 40,
      category: false,
      leaf: true,
      function: {
        id: '606392654267154438',
        code: 'stock:stockWarning',
        name: '票据不足预警',
        url: ''
      },
      functionItems: []
    },
    {
      id: '735289708061393156',
      parentId: '735289708061393153',
      name: '数据采集',
      openMode: null,
      displaySort: 59,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '737595968060391646',
      parentId: '613015803075231794',
      name: '应急库存',
      openMode: null,
      displaySort: 75,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '737595968060391649',
      parentId: '737595968060391646',
      name: '库存发放管理',
      openMode: 0,
      displaySort: 76,
      category: false,
      leaf: true,
      function: {
        id: '737595968060391559',
        code: 'miniBill:stockOut',
        name: '库存发放管理',
        url: ''
      },
      functionItems: []
    },
    {
      id: '737595968060391652',
      parentId: '737595968060391646',
      name: '应急库存管理',
      openMode: 0,
      displaySort: 77,
      category: false,
      leaf: true,
      function: {
        id: '737595968060391562',
        code: 'miniBill:sharpStock',
        name: '应急库存管理',
        url: ''
      },
      functionItems: []
    },
    {
      id: '737595968060391658',
      parentId: '737595968060391655',
      name: '应急可用库存查询',
      openMode: 0,
      displaySort: 79,
      category: false,
      leaf: true,
      function: {
        id: '737595968060391565',
        code: 'miniBill:stockOutQuery',
        name: '应急可用库存查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '737595968060391661',
      parentId: '737595968060391655',
      name: '库存预警信息查询',
      openMode: 0,
      displaySort: 80,
      category: false,
      leaf: true,
      function: {
        id: '737595968060391568',
        code: 'miniBill:stockWarn',
        name: '库存预警信息查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '737595968060391664',
      parentId: '613015803075231782',
      name: '应急开票数据结转',
      openMode: 0,
      displaySort: 81,
      category: false,
      leaf: true,
      function: {
        id: '737595968060391571',
        code: 'miniBill:differ',
        name: '应急开票数据结转',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1614478275285934432',
      parentId: '613015803075231807',
      name: '票据申退',
      openMode: 0,
      displaySort: 86,
      category: false,
      leaf: true,
      function: {
        id: '859762258465742998',
        code: 'stock:stockReturn',
        name: '票据申退',
        url: ''
      },
      functionItems: [
        {
          id: '859762258465743000',
          code: 'stock:stockReturn:add',
          name: '新增',
          enabled: true
        },
        {
          id: '859762258465743012',
          code: 'stock:stockReturn:cancelCheck',
          name: '取消审核',
          enabled: true
        },
        {
          id: '859762258465743008',
          code: 'stock:stockReturn:cancelReport',
          name: '取消上报',
          enabled: true
        },
        {
          id: '859762258465743010',
          code: 'stock:stockReturn:check',
          name: '审核',
          enabled: true
        },
        {
          id: '859762258465743002',
          code: 'stock:stockReturn:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '859762258465743004',
          code: 'stock:stockReturn:edit',
          name: '编辑',
          enabled: true
        },
        {
          id: '859762258465743006',
          code: 'stock:stockReturn:report',
          name: '上报',
          enabled: true
        }
      ]
    },
    {
      id: '897741245531635803',
      parentId: '613015803075231807',
      name: '库存作废',
      openMode: 0,
      displaySort: 87,
      category: false,
      leaf: true,
      function: {
        id: '897741245531635713',
        code: 'stock:stockInvalid',
        name: '库存作废',
        url: ''
      },
      functionItems: [
        {
          id: '897741245531635715',
          code: 'stock:stockInvalid:add',
          name: '新增',
          enabled: true
        },
        {
          id: '897741245531635727',
          code: 'stock:stockInvalid:cancelCheck',
          name: '取消审核',
          enabled: true
        },
        {
          id: '897741245531635723',
          code: 'stock:stockInvalid:cancelReport',
          name: '取消上报',
          enabled: true
        },
        {
          id: '897741245531635725',
          code: 'stock:stockInvalid:check',
          name: '审核',
          enabled: true
        },
        {
          id: '897741245531635717',
          code: 'stock:stockInvalid:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '897741245531635719',
          code: 'stock:stockInvalid:edit',
          name: '编辑',
          enabled: true
        },
        {
          id: '897741245531635721',
          code: 'stock:stockInvalid:report',
          name: '上报',
          enabled: true
        }
      ]
    },
    {
      id: '981719366544458480',
      parentId: '613015803075231817',
      name: '票据入库情况查询',
      openMode: 0,
      displaySort: 88,
      category: false,
      leaf: true,
      function: {
        id: '981719366544457890',
        code: 'report:stock:billIn',
        name: '票据入库情况查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '981719366544458482',
      parentId: '613015803075231817',
      name: '票据分发情况查询',
      openMode: 0,
      displaySort: 89,
      category: false,
      leaf: true,
      function: {
        id: '981719366544457736',
        code: 'report:stock:billOut',
        name: '票据分发情况查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1020449697992606925',
      parentId: '613015803075231817',
      name: '库存作废情况查询',
      openMode: 0,
      displaySort: 90,
      category: false,
      leaf: true,
      function: {
        id: '1020449697992606766',
        code: 'report:stock:billInvalid',
        name: '库存作废情况查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1111615154853798185',
      parentId: '1111615154853798187',
      name: '单位收费核对总览',
      openMode: 0,
      displaySort: 91,
      category: false,
      leaf: true,
      function: {
        id: '1111615154853798102',
        code: 'report:chargeCheck',
        name: '单位收费核对总览',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1111615154853798187',
      parentId: '613015803075231813',
      name: '对账管理',
      openMode: null,
      displaySort: 92,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1114644790424674999',
      parentId: '1114644790424674997',
      name: '凭证库存结余表',
      openMode: 0,
      displaySort: 108,
      category: false,
      leaf: true,
      function: {
        id: '1114644790424674863',
        code: 'report:stockBalance',
        name: '凭证库存结余表',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1114644790424675001',
      parentId: '1114644790424674997',
      name: '预交金明细表',
      openMode: 0,
      displaySort: 109,
      category: false,
      leaf: true,
      function: {
        id: '1114644790424674866',
        code: 'report:paymentDetail',
        name: '预交金明细表',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1114644790424675003',
      parentId: '1114644790424674997',
      name: '预交金汇总表',
      openMode: 0,
      displaySort: 110,
      category: false,
      leaf: true,
      function: {
        id: '1114644790424674869',
        code: 'report:paymentSummary',
        name: '预交金汇总表',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1114644790424675005',
      parentId: '1114644790424674997',
      name: '收款收据明细表',
      openMode: 0,
      displaySort: 111,
      category: false,
      leaf: true,
      function: {
        id: '1114644790424674872',
        code: 'report:receiptDetail',
        name: '收款收据明细表',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1114644790424675007',
      parentId: '1114644790424674997',
      name: '出院证明明细表',
      openMode: 0,
      displaySort: 112,
      category: false,
      leaf: true,
      function: {
        id: '1114644790424674875',
        code: 'report:dischargeDetail',
        name: '出院证明明细表',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1114644790424676140',
      parentId: '613015803075231817',
      name: '票据领用存情况查询',
      openMode: 0,
      displaySort: 113,
      category: false,
      leaf: true,
      function: {
        id: '1114644790424676040',
        code: 'report:stock:billInUsedBalance',
        name: '票据领用存情况查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '615516642272608256',
      parentId: '613015803075231800',
      name: '交付管理',
      openMode: null,
      displaySort: 131,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1480364794732194363',
      parentId: '613015803075231794',
      name: '审验申请',
      openMode: 0,
      displaySort: 160,
      category: false,
      leaf: true,
      function: {
        id: '1480364794732191745',
        code: 'bill:collect',
        name: '审验申请',
        url: ''
      },
      functionItems: [
        {
          id: '1480364794732191747',
          code: 'bill:collect:add',
          name: '新增',
          enabled: true
        },
        {
          id: '1480364794732191749',
          code: 'bill:collect:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '1480364794732191753',
          code: 'bill:collect:rectify',
          name: '整改上报',
          enabled: true
        },
        {
          id: '1480364794732191751',
          code: 'bill:collect:report',
          name: '审验上报',
          enabled: true
        }
      ]
    },
    {
      id: '1614478275285934250',
      parentId: '613015803075231783',
      name: '应急基础信息',
      openMode: null,
      displaySort: 161,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1530232526134624639',
      parentId: '613015803075231783',
      name: '急救基础信息',
      openMode: null,
      displaySort: 162,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1613558362010607792',
      parentId: '1613558362010607790',
      name: '缴款通知书明细查询',
      openMode: 0,
      displaySort: 185,
      category: false,
      leaf: true,
      function: {
        id: '1613558362010607621',
        code: 'inreport:template3',
        name: '缴款通知书明细查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1614478275285934426',
      parentId: '613015803075231783',
      name: '监管基础信息',
      openMode: null,
      displaySort: 187,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1614478275285934462',
      parentId: '1614478275285934454',
      name: '汇缴缴款书',
      openMode: 0,
      displaySort: 192,
      category: false,
      leaf: true,
      function: {
        id: '1614478275285934211',
        code: 'paybook:remitpaybook',
        name: '汇缴缴款书',
        url: ''
      },
      functionItems: [
        {
          id: '1614478275285934237',
          code: 'paybook:remitpaybook:add',
          name: '保存',
          enabled: true
        },
        {
          id: '1614478275285934243',
          code: 'paybook:remitpaybook:cancelConfirmManually',
          name: '手动取消缴款确认',
          enabled: true
        },
        {
          id: '1614478275285934241',
          code: 'paybook:remitpaybook:confirmManually',
          name: '手动缴款确认',
          enabled: true
        },
        {
          id: '1614478275285934239',
          code: 'paybook:remitpaybook:invalid',
          name: '作废',
          enabled: true
        }
      ]
    },
    {
      id: '1614478275285934470',
      parentId: '1614478275285934468',
      name: '门诊/住院开票数据分析',
      openMode: 0,
      displaySort: 194,
      category: false,
      leaf: true,
      function: {
        id: '1583577600498869192',
        code: 'medical:mon:analysis',
        name: '门诊/住院开票数据分析',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1614478275285939623',
      parentId: null,
      name: '内置报表管理',
      openMode: null,
      displaySort: 198,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1614478275285939625',
      parentId: '1614478275285939623',
      name: '自定义报表模板管理',
      openMode: 0,
      displaySort: 199,
      category: false,
      leaf: true,
      function: {
        id: '1614478275285939422',
        code: 'inreport:list',
        name: '报表模板管理',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1614478275285939934',
      parentId: '613015803075231782',
      name: '系统设置',
      openMode: 0,
      displaySort: 200,
      category: false,
      leaf: true,
      function: {
        id: '1614478275285939736',
        code: 'basic:systemset',
        name: '系统设置',
        url: '123123'
      },
      functionItems: []
    },
    {
      id: '1614478275285940892',
      parentId: '613015803075231807',
      name: '票据销毁',
      openMode: 0,
      displaySort: 201,
      category: false,
      leaf: true,
      function: {
        id: '1614478275285940683',
        code: 'stock:stockDestroy',
        name: '票据销毁',
        url: ''
      },
      functionItems: [
        {
          id: '1614478275285940685',
          code: 'stock:stockDestroy:add',
          name: '新增',
          enabled: true
        },
        {
          id: '1614478275285940687',
          code: 'stock:stockDestroy:delete',
          name: '删除',
          enabled: true
        },
        {
          id: '1614478275285940689',
          code: 'stock:stockDestroy:edit',
          name: '修改',
          enabled: true
        },
        {
          id: '1614478275285940691',
          code: 'stock:stockDestroy:report',
          name: '上报',
          enabled: true
        },
        {
          id: '1614478275285940693',
          code: 'stock:stockDestroy:saveReport',
          name: '保存并上报',
          enabled: true
        }
      ]
    },
    {
      id: '1614478309645674336',
      parentId: '1138146782748950623',
      name: '凭证日结核销',
      openMode: null,
      displaySort: 204,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1614478309645677223',
      parentId: '613015803075231820',
      name: '捐赠票据明细查询',
      openMode: 0,
      displaySort: 210,
      category: false,
      leaf: true,
      function: {
        id: '1614478309645677015',
        code: 'inreport:template7',
        name: '捐赠票据明细查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1614478309645677934',
      parentId: '613015803075231820',
      name: '医疗纸质票据明细查询',
      openMode: 0,
      displaySort: 211,
      category: false,
      leaf: true,
      function: {
        id: '1614478309645677720',
        code: 'inreport:template9',
        name: '医疗纸质票据明细查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1705854288623886552',
      parentId: '613015803075231820',
      name: '捐赠票据汇总查询',
      openMode: 0,
      displaySort: 215,
      category: false,
      leaf: true,
      function: {
        id: '1705854288623886340',
        code: 'inreport:template13',
        name: '捐赠票据汇总查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1715296379087151477',
      parentId: '613015803075231783',
      name: '捐赠基础信息',
      openMode: null,
      displaySort: 217,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1715296379087151945',
      parentId: '1613558362010607790',
      name: '实时缴款汇总查询',
      openMode: 0,
      displaySort: 219,
      category: false,
      leaf: true,
      function: {
        id: '1715296379087151732',
        code: 'inreport:template11',
        name: '实时缴款汇总查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1715296379087152784',
      parentId: '613015803075231816',
      name: '统计报表',
      openMode: null,
      displaySort: 220,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1715296379087152786',
      parentId: '1715296379087152784',
      name: '全国开票情况统计分析',
      openMode: 0,
      displaySort: 221,
      category: false,
      leaf: true,
      function: {
        id: '1715296379087152569',
        code: 'donation:InvoiceSummaryAnalysis',
        name: '全国开票情况统计分析',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1795666281031131138',
      parentId: '613015803075231820',
      name: '患者欠费明细',
      openMode: 0,
      displaySort: 222,
      category: false,
      leaf: true,
      function: {
        id: '1772794480668237830',
        code: 'inreport:template14',
        name: '患者欠费明细',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1801512727953309958',
      parentId: '613015803075231820',
      name: '欠费汇总查询',
      openMode: 0,
      displaySort: 223,
      category: false,
      leaf: true,
      function: {
        id: '1801512727953309739',
        code: 'inreport:template12',
        name: '患者欠费汇总查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1863208627490383026',
      parentId: '1715296379087152784',
      name: '渠道汇总表（测试）',
      openMode: 0,
      displaySort: 226,
      category: false,
      leaf: true,
      function: {
        id: '1863208627490382806',
        code: 'inreport:template20',
        name: '渠道汇总表（测试）',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1863208627490385056',
      parentId: '613015803075231816',
      name: '财政预交金查询',
      openMode: null,
      displaySort: 229,
      category: true,
      leaf: false,
      function: null,
      functionItems: null
    },
    {
      id: '1863208627490385058',
      parentId: '1863208627490385056',
      name: '预交金明细查询',
      openMode: 0,
      displaySort: 230,
      category: false,
      leaf: true,
      function: {
        id: '1863208627490384831',
        code: 'inreport:template23',
        name: '预交金明细查询',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1863208627490386050',
      parentId: '1863208627490385056',
      name: '预交金汇总报表',
      openMode: 0,
      displaySort: 231,
      category: false,
      leaf: true,
      function: {
        id: '1863208627490385601',
        code: 'financePayment:settlementQuery',
        name: '预交金汇总报表',
        url: ''
      },
      functionItems: []
    },
    {
      id: '1863208627490386052',
      parentId: '1863208627490385056',
      name: '预交金日报表',
      openMode: 0,
      displaySort: 232,
      category: false,
      leaf: true,
      function: {
        id: '1863208627490385603',
        code: 'financePayment:dailyQuery',
        name: '预交金日报表',
        url: ''
      },
      functionItems: []
    }
  ]
}
