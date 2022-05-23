export interface ProductInterface {
	id: number
	price: number
	description: string
	category: string
	brand: string
	filter: string
	images: string[]
	color: string
}

export const products: ProductInterface[] = [
	// sneakers
    {
		id: 1,
		price: 199,
		category: 'unisex',
		brand: 'Nike sportswear',
		filter: 'shoes',
		description: 'AIR VAPORMAX 2021 - Low sneakers',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/682270c4ced942bb9b32a5a8b6da9bb3/6a7ecdc874614b3b8a4fc235a47bc7ce.jpg?imwidth=300&filter=packshot'
		],
	},
    {
		id: 2,
		price: 199,
		category: 'unisex',
		brand: 'Nike sportswear',
		filter: 'shoes',
		description: 'AIR VAPORMAX 2021 - Low sneakers',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/e7b13c51e1d8306f9dc413da66c52459/d28b73aca9f246d59e46f274abb8605a.jpg?imwidth=300&filter=packshot'
		],
	},
    {
		id: 3,
		price: 199,
		category: 'unisex',
		brand: 'Nike sportswear',
		filter: 'shoes',
		description: 'AIR VAPORMAX 2021 - Low sneakers',
		color: 'white',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/8e5c3b8c6cdf464380b31929278e1ecd/eddf448c069b4200a0d99a90cf79dd61.jpg?imwidth=300&filter=packshot'
		],
	},
    {
		id: 4,
		price: 199,
		category: 'unisex',
		brand: 'Nike sportswear',
		filter: 'shoes',
		description: 'AIR VAPORMAX 2021 - Low sneakers',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/31b1ecd979b946a3a77e9135edb6321d/511d5c63b34c413fbce25ece7e11dfe3.jpg?imwidth=300&filter=packshot'
		],
	},
    {
		id: 5,
		price: 199,
		category: 'unisex',
		brand: 'Nike sportswear',
		filter: 'shoes',
		description: 'AIR VAPORMAX 2021 - Low sneakers',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/a44fc164ae804c8589af0c12eef6d27b/cea82d7c35a64a50a988733eb4ae4c3b.jpg?imwidth=300&filter=packshot'
		],
	},
    {
		id: 6,
		price: 199,
		category: 'unisex',
		brand: 'Nike sportswear',
		filter: 'shoes',
		description: 'AIR VAPORMAX 2021 - Low sneakers',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/802ebe02b7364deb944d4091d88e06f9/0198e142142b4cee963d71db90d379fa.jpg?imwidth=300&filter=packshot'
		],
	},
    {
		id: 7,
		price: 199,
		category: 'unisex',
		brand: 'Nike sportswear',
		filter: 'shoes',
		description: 'AIR VAPORMAX 2021 - Low sneakers',
		color: 'white',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/97ebfdf66dd24dd89c19cf102ffc629d/c84352b90c1e449a9b232b9bdff154b1.jpg?imwidth=300&filter=packshot'
		],
	},
    {
		id: 8,
		price: 199,
		category: 'unisex',
		brand: 'Nike sportswear',
		filter: 'shoes',
		description: 'AIR VAPORMAX 2021 - Low sneakers',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/83980d84d6d73fb890eebe67f0c543bb/61366a65e2b24aa8954ae66448b73e0d.jpg?imwidth=300&filter=packshot'
		],
	},
    {
		id: 9,
		price: 199,
		category: 'unisex',
		brand: 'Nike sportswear',
		filter: 'shoes',
		description: 'AIR VAPORMAX 2021 - Low sneakers',
		color: 'white',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/f402bd2ebd8b440387f327fc432d6242/9bd335282276462fa63a35afc53bbb23.jpg?imwidth=300&filter=packshot'
		],
	},
	// clothes
	{
		id: 10,
		price: 159,
		category: 'Man',
		brand: 'Boss',
		filter: 'clothes',
		description: 'PAULE - Polo - black',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/851df1e5c1c14ad59207491878fc1b62/5ab325bf320b42ebafbb4ee374b7e8f7.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 11,
		price: 139,
		category: 'Man',
		brand: 'Karl Lagerfeld',
		filter: 'clothes',
		description: 'CREWNECK - T-shirt basic - black',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/a92452b263b6459eaad646f7a541a1fe/6dc20ecb1cc94f2f906e99a2b0517ffc.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 12,
		price: 139,
		category: 'Man',
		brand: 'Lacoste',
		filter: 'clothes',
		description: 'Polo lacoste - black',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/a35acb00e21e36d2afbf7172adb06f1a/1155224f81204bdf8fa01e78ed414369.jpg?imwidth=300'
		],
	},
	{
		id: 13,
		price: 759,
		category: 'Man',
		brand: 'Versace',
		filter: 'clothes',
		description: 'Hoodie versace - black',
		color: 'gold',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/4e4fa923f7c34de5b9060befaeb3c4bd/b24584bebfa34c1691db805bc99f39ef.jpg?imwidth=300'
		],
	},
	{
		id: 14,
		price: 149,
		category: 'Man',
		brand: 'Hugo',
		filter: 'clothes',
		description: 'Hoodie hugo - black',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/d66279b300f44cecb86fb388fefbf449/3e1c074855524956a7b33c8575224e83.jpg?imwidth=300'
		],
	},
	{
		id: 15,
		price: 139,
		category: 'Man',
		brand: 'Emporio Armani',
		filter: 'clothes',
		description: 'Tshirt - nero',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/f0ee31782f4b30b09f26c4b2d34724a8/aff673cc6448445f847ad08cc6a9f677.jpg?imwidth=300'
		],
	},
	{
		id: 16,
		price: 279,
		category: 'Man',
		brand: 'Versace',
		filter: 'clothes',
		description: 'Tshirt - black',
		color: 'gold',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/d8afaa5b747046b6994e2ad79222c219/2fe46d7c7408475aa8e87ea32c6a14f3.jpg?imwidth=300'
		],
	},
	// caps
	{
		id: 17,
		price: 79,
		category: 'Unisex',
		brand: 'Hugo',
		filter: 'accesories',
		description: 'UNISEX - black',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/b5aaf26bdeeb4f1689c3db5e203bcbf1/87f362a54f34416688fbb6f3eca0cdf2.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 18,
		price: 39,
		category: 'Unisex',
		brand: 'Tommy Hilfiger',
		filter: 'accesories',
		description: 'UNISEX - black',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/ebabf098e7113978ada6b837c6f629fe/fdb34ee8033940fc94cf3ea16cc1ab76.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 19,
		price: 49,
		category: 'Unisex',
		brand: 'Guess',
		filter: 'accesories',
		description: 'UNISEX - black',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/5c25b63e10804e83bb721f4282a27219/28c45d8aa36042f6a9bce115259bab68.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 20,
		price: 49,
		category: 'Unisex',
		brand: 'Puma',
		filter: 'accesories',
		description: 'MERCEDES - Black',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/8d180bbfba9c4fe2a52e3a6ae49767f6/ac445bf95728452fa31b675db5bf35ae.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 21,
		price: 89,
		category: 'Unisex',
		brand: 'Boss',
		filter: 'accesories',
		description: 'UNISEX - Black',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/1a147c2b4ef240adb0ad3bc96ef117b6/55822b64b2734659ac0f89a6e0db9f81.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 22,
		price: 89,
		category: 'Unisex',
		brand: 'Polo Ralph Lauren',
		filter: 'accesories',
		description: 'UNISEX - Black',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/7e1fd4cd15c049479cb520970e592863/077f93aadecf4e2284bcfa99d35bba2e.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 23,
		price: 49,
		category: 'Unisex',
		brand: 'Jordan',
		filter: 'accesories',
		description: 'UNISEX - Black',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/babb27e6b3f34a749232fa4a7f576ca5/639046d91a8e4962a049373765cfaf07.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 24,
		price: 139,
		category: 'Unisex',
		brand: 'Adidas',
		filter: 'clothes',
		description: 'TREFOIL UNISEX - Hoodie Black',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/a3d653adf58a456382864be116f82868/68b368f434c6442e9ec51622bf7e05e1.jpg?imwidth=300'
		],
	},
	{
		id: 25,
		price: 239,
		category: 'Man',
		brand: 'Nike sportswear',
		filter: 'clothes',
		description: 'Nike tech fleece - Grey',
		color: 'grey',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/92e5f5e4fea34bcba737471ac4f0e15c/4e84904c52d145ec81d5f37c21c81eff.jpg?imwidth=1800&filter=packshot'
		],
	},
	{
		id: 26,
		price: 189,
		category: 'Man',
		brand: 'Calvin klein',
		filter: 'clothes',
		description: 'ESSENTIAL REGULAR HOODIE',
		color: 'white',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/5301b392d49e4c54bd043c62cd514d40/c529eb33ef5749238311d90d76073f92.jpg?imwidth=300'
		],
	},
	{
		id: 27,
		price: 119,
		category: 'Man',
		brand: 'Jordan',
		filter: 'clothes',
		description: 'M J DF AIR FLC PO - Hoodie',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/7f0d2ce174e94ebf9002bb4e81b6a0a9/cf49466802fa4586bd766a605328c5a9.jpg?imwidth=300'
		],
	},
	{
		id: 28,
		price: 129,
		category: 'Man',
		brand: 'Nike sportswear',
		filter: 'clothes',
		description: 'REPEAT HOODIE - Bluza - white/mystic',
		color: 'white',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/e61c0d11a4e94d94b184c4707cde3f57/b80ae3d7830545278cd1982e52fe6af5.jpg?imwidth=300'
		],
	},
	{
		id: 29,
		price: 119,
		category: 'Man',
		brand: 'Levis',
		filter: 'clothes',
		description: 'STANDARD GRAPHIC HOODIE',
		color: 'grey',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/88a9f822f55d459896cf245a44654947/3dffb1b001c142c5a512eb0f3a9c5e95.jpg?imwidth=300'
		],
	},
	{
		id: 30,
		price: 219,
		category: 'Man',
		brand: 'Polo ralph lauren',
		filter: 'clothes',
		description: 'RIGBY - Zip Hoodie - black',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/fddf413dc923474092e8919422f9c56c/2e89fe63bf304c269feb0812894fea22.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 31,
		price: 189,
		category: 'Man',
		brand: 'Calvin klein',
		filter: 'clothes',
		description: 'MONOGRAM BADGE - Zip Hoodie',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/2590ad3f0db449e7946d14fd5143c40e/ca36820063844f17b74c7f614dbfb8af.jpg?imwidth=300'
		],
	},
	{
		id: 32,
		price: 189,
		category: 'Man',
		brand: 'Tommy hilfiger',
		filter: 'clothes',
		description: 'LOGO HOODY - Zip Hoodie - black',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/567d599dbab44c568f963fc3a19a3e67/4ad7210a1d45434c8647d15b5887b5fe.jpg?imwidth=300'
		],
	},
	{
		id: 33,
		price: 99,
		category: 'Man',
		brand: 'Nike sportswear',
		filter: 'clothes',
		description: 'CREW - Hoodie - white',
		color: 'white',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/62d8444d414147108e5cf30fafc47a65/7e78d0d02d9d4781a85625e059eb03ef.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 34,
		price: 79,
		category: 'Man',
		brand: 'New balance',
		filter: 'clothes',
		description: 'CREW - Hoodie - grey',
		color: 'grey',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/1450df59b31b389d8cec89fd8b887bb6/7c0ff6dee9ab4b88ad15754e154d23bd.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 35,
		price: 279,
		category: 'Man',
		brand: 'Polo ralph lauren',
		filter: 'clothes',
		description: 'DOUBLE KINT HOODIE',
		color: 'blue',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/a4985d47909a3b9b89772c4a1f5ac854/797289e9a87e41399e3502c6f2204a3a.jpg?imwidth=300'
		],
	},
	{
		id: 36,
		price: 249,
		category: 'Man',
		brand: 'Lacoste',
		filter: 'clothes',
		description: 'HOOD JACKET TAPERED',
		color: 'blue',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/6b4e581e16464e59aab16e26cfb5a810/7786ab9c12834024b0a46b73dbb04dcf.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 37,
		price: 299,
		category: 'Man',
		brand: 'Karl lagerfeld',
		filter: 'clothes',
		description: 'CREWNECK HOODIE',
		color: 'gold',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/aaee26ac95c94decb863a775a55c0c43/fc1720b3904f4c938917e0992f63b0a1.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 38,
		price: 319,
		category: 'Man',
		brand: 'Karl lagerfeld',
		filter: 'clothes',
		description: 'CREWNECK JACKET',
		color: 'gold',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/5388af8f08de453cac3a4aee23690557/928526e4390543df90d8c4f6594ed040.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 39,
		price: 319,
		category: 'Man',
		brand: 'Adidas',
		filter: 'clothes',
		description: 'TREFOIL HOODIE',
		color: 'gold',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/00ddd911f9804c49affc82b262106dd9/37e7f744de6445a9ac0cd93184baa104.jpg?imwidth=300'
		],
	},
	{
		id: 40,
		price: 419,
		category: 'Man',
		brand: 'Polo ralph lauren',
		filter: 'clothes',
		description: 'PACKABLE QUILTED VEST',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/a6d4a5f8dbd83f7da57dcce1b8ca5220/0e1f3050f1e94cb5ba81115bb3857f01.jpg?imwidth=762'
		],
	},
	{
		id: 41,
		price: 230,
		category: 'Man',
		brand: 'Hugo',
		filter: 'clothes',
		description: 'BENTINO - vest',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/59c7c255418449ffb1cbac13e4b93a19/d2918231e87342a1bba4d545b7dc73fa.jpg?imwidth=1800'
		],
	},
	{
		id: 42,
		price: 189,
		category: 'Man',
		brand: 'Emporio armani',
		filter: 'clothes',
		description: 'TROUSER - Training pants',
		color: 'black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/b2c5cdbba8554beea5d5234a8dcd66de/961454b6b9ff424bb254f2cfac1d5672.jpg?imwidth=1800'
		],
	},
	{
		id: 43,
		price: 230,
		category: 'Man',
		brand: 'Emporio armani',
		filter: 'clothes',
		description: 'TROUSER - Training pants',
		color: 'Gold',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/1bc8cca0c50146d2b8216aae830bbaa0/dd073ee7002440df99212b7500d0c18f.jpg?imwidth=1800'
		],
	},
	{
		id: 44,
		price: 60,
		category: 'Man',
		brand: 'Polo ralph lauren',
		filter: 'caps',
		description: 'COTTON CHINO BASEBALL CAP',
		color: 'Gold',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/a9ae6518dfcb3ec78dba9ebc3201d48d/8c9848c3969e46729ffeb11c8d8b6cf7.jpg?imwidth=1800'
		],
	},
	{
		id: 45,
		price: 130,
		category: 'Man',
		brand: 'Polo ralph lauren',
		filter: 'clothes',
		description: 'CUSTOM CREWNECK - T-shirt basic',
		color: 'White',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/f321ab7f6c703ac89429473d2d98ff1e/63f3d8309ecc4d6eb60a1e183bd03338.jpg?imwidth=1800&filter=packshot'
		],
	},
	{
		id: 46,
		price: 189,
		category: 'Unisex',
		brand: 'Nike sportswear',
		filter: 'sneakers',
		description: 'AIR FORCE 1 - Low sneakers',
		color: 'White',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/553c5bd966ed3085afe815aed8fae88a/36db4e188f9b40e1b5b4adc8c2e9b6ee.jpg?imwidth=1800&filter=packshot'
		],
	},
	{
		id: 47,
		price: 189,
		category: 'Unisex',
		brand: 'Nike sportswear',
		filter: 'sneakers',
		description: 'AIR FORCE 1 - Low sneakers',
		color: 'Black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/e4b6428538bb3d78939cd84e1d78281d/321557a3bc8446409957fc8da11d45c1.jpg?imwidth=1800&filter=packshot'
		],
	},
	{
		id: 48,
		price: 139,
		category: 'Man',
		brand: 'Tommy hilfiger',
		filter: 'clothes',
		description: 'Original stretch',
		color: 'Black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/43f8d32b965d3a3cb916bbaa4b7026b0/ddf8803819614bd28e7e10917ec52bf6.jpg?imwidth=300'
		],
	},
	{
		id: 49,
		price: 239,
		category: 'Man',
		brand: 'Polo ralph lauren',
		filter: 'clothes',
		description: 'CUSTOM SLIM FIT MESH SHIRT',
		color: 'White',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/c1a81785d53c3e24899eada586b71841/4524d7dc686b47348a6c430d2c44f2f1.jpg?imwidth=300'
		],
	},
	{
		id: 50,
		price: 259,
		category: 'Man',
		brand: 'Polo ralph lauren',
		filter: 'clothes',
		description: 'SLIM FIT STRETCH POPLIN SHIRT',
		color: 'Black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/f59c673553654d908541f71ad633e3fa/3cdb2f986f89450f9dd60d9bf1b28bda.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 51,
		price: 299,
		category: 'Man',
		brand: 'Nike sportswear',
		filter: 'sneakers',
		description: 'Air max 97 - Low sneakers',
		color: 'White',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/b0e214230cc53c2992b6b62854716fd1/52d04c679ff542609c7a3fb782463a4c.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 52,
		price: 259,
		category: 'Man',
		brand: 'Nike sportswear',
		filter: 'sneakers',
		description: 'Air max 270 - Low sneakers',
		color: 'Black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/3cf7e79923b83c1da9f8e190a78df533/b8d578124c5e4ae1a4ce5aff11c17280.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 53,
		price: 139,
		category: 'Unisex',
		brand: 'Nike sportswear',
		filter: 'sneakers',
		description: 'BLAZER MID 77 UNISEX',
		color: 'White',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/b1476bda9548395fb1f1257ea3508966/dba2a5f279a448faaa255aa87ecd8890.jpg?imwidth=300'
		],
	},
	{
		id: 54,
		price: 229,
		category: 'Unisex',
		brand: 'Nike sportswear',
		filter: 'sneakers',
		description: 'Air max 90 - Low sneakers',
		color: 'White',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/eed502ecc114421890d294861dc026d5/54925d51f6c94312b4cc622fe1825b49.jpg?imwidth=300'
		],
	},
	{
		id: 55,
		price: 219,
		category: 'Man',
		brand: 'Jordan',
		filter: 'sneakers',
		description: 'Max aura 3 - High sneakers',
		color: 'White',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/c276646fa7354e17b04a0c68b43b9dd6/4f8d611dada14faaba46486a2dadf932.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 56,
		price: 179,
		category: 'Man',
		brand: 'Polo ralph lauren',
		filter: 'sneakers',
		description: 'HERITAGE COURT II LEATHER SNEAKERS',
		color: 'White',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/3f915f4e7d67494a9fbe0bf44941bd1c/99a2d5246bd34144b2196643e4894d44.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 57,
		price: 279,
		category: 'Man',
		brand: 'Nike sportswear',
		filter: 'sneakers',
		description: 'AIR MAX 97 - Low sneakers',
		color: 'Black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/b68d9c8f7cc73214b23de81813b5f6bf/9993b098b1b2464092781c5448b5a623.jpg?imwidth=300&filter=packshot'
		],
	},
	{
		id: 57,
		price: 39,
		category: 'Man',
		brand: 'Adidas',
		filter: 'accesories',
		description: 'ADILETTE LITE - black',
		color: 'Black',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/af9214f314ab3df8b445415bfa67b1fe/83eb83195fcf447883936f6ced8e57a0.jpg?imwidth=300'
		],
	},
]