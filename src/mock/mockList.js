// let newList = {
//   // 返回一个随机的布尔值
//   'boolean': '@boolean',
//   'bool': '@bool',
//   // 返回一个随机的自然数（大于等于 0 的整数）
//   'natural': '@natural',
//   'naturalMin': '@natural(10)',
//   'naturalMax': '@natural(60, 100)',
//   // 返回一个随机的整数
//   'integer': '@integer',
//   'integerMin': '@integer(20)',
//   'integerMax': '@integer(40, 100)',
//   // 返回一个随机的浮点数
//   'float': '@float',
//   'floatMin': '@float(5)',
//   'floatMax': '@float(2, 9)',
//   'floatDminMin': '@float(10, 20, 4)',
//   'floatDminMax': '@float(10, 15, 5, 7)',
//   // 返回一个随机字符
//   'character': '@character',
//   'characterlower': '@character(lower)',
//   'characterupper': '@character(upper)',
//   'characternumber': '@character(number)',
//   'charactersymbol': '@character(symbol)',
//   // 随机字符串
//   'string': '@string',
//   'stringLen': '@string(8)',
//   'stringMax': '@string(2, 8)',
//   // 返回一个整型数组
//   'range': '@range(10)',
//   'range': '@range(3, 7)',
//   'range': '@range(30, 70, 10)',

//   // 返回一个随机的日期字符串
//   'date': '@date(yyyy-MM-dd HH:mm:ss A)',
//   // 返回一个随机的时间字符串
//   'time': '@time(A HH:mm:ss)',
//   // 返回一个随机的日期和时间字符串
//   'datetime': '@datetime(yyyy-MM-dd A HH:mm:ss)',
//   // 返回当前的日期和时间字符串
//   'now': '@now(yyyy-MM-dd HH:mm:ss SS)',

//   // 生成一个随机的图片地址
//   'image': '@image',
//   'imageConf': Random.image('200x100', '#ffcc33', '#FFF', 'png', '!'),
//   // 生成一段随机的 Base64 图片编码
//   'dataImage': Random.dataImage('200x100', 'Text'),

//   // 随机生成一个有吸引力的颜色，格式为 '#RRGGBB'
//   'color': '@color',
//   'hex': '@hex',
//   'rgb': '@rgb',
//   'rgba': '@rgba',
//   'hsl': '@hsl',

//   // 随机生成一段文本
//   'paragraph': '@paragraph(4)',
//   // 随机生成一段中文文本
//   'cparagraph': '@cparagraph(1, 10)',
//   // 随机生成一个句子，第一个单词的首字母大写
//   'sentence': '@sentence(5)',
//   // 随机生成一段中文文本
//   'csentence': '@csentence(1, 10)',
//   // 随机生成一个单词
//   'word': '@word(7)',
//   'cword': '@cword(1, 5)',
//   // 随机生成一句标题，其中每个单词的首字母大写
//   'title': '@title(6)',
//   'title': '@title(3, 6)',

//   // 随机生成一个常见的名
//   'first': '@first',
//   'cfirst': '@cfirst',
//   // 随机生成一个常见的姓
//   'last': '@last',
//   'clast': '@clast',
//   // 随机生成一个常见的姓名
//   'name': '@name',
//   'cname': '@cname',
//   // 随机生成一个 URL
//   'protocol': Random.url('https', 'muheda.com'),
//   // 随机生成一个域名
//   'domain': '@domain',
//   // 随机生成一个顶级域名
//   'tld': '@tld',
//   // 随机生成一个邮件地址
//   'email': '@email(muheda.com)',
//   // 随机生成一个 IP 地址
//   'ip': '@ip',

//   // 随机生成一个（中国）大区
//   'region': '@region',
//   // 随机生成一个（中国）省（或直辖市、自治区、特别行政区）
//   'province': '@province',
//   // 随机生成一个（中国）市
//   'city': '@city',
//   'cityPrefix': '@city(true)',
//   // 随机生成一个（中国）县
//   'county': '@county',
//   // 生成所属的省、市
//   'countyPrefix': '@county(true)',
//   // 随机生成一个邮政编码（六位数字）
//   'zip': '@zip',

//   // 首字母大写
//   'strCapitalize': '@capitalize(hello)',
//   // 转为大写
//   'strUpper': '@upper(hello)',
//   // 转为小写
//   'strLower': '@lower(HeLLo)',
//   // 从数组中随机选取一个元素
//   'arrPick': Random.pick(['a', 'e', 'i', 'o', 'u']),
//   // 打乱数组中元素的顺序
//   'arrShuffle': Random.shuffle(['a', 'e', 'i', 'o', 'u']),
//   // 随机生成一个 GUID
//   'guid': '@guid',
//   // 随机生成一个 18 位身份证
//   'id': '@id',
//   // 生成一个全局的自增整数
//   'increment': '@increment(10)'
// }
