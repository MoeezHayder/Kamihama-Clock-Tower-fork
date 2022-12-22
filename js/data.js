var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "Jan 1 2023, 00:00";
var nextAnniversary = "August 22 2023, 0:00";
var alertMessages = [];
var alertTypes = [];
var timerData = [
    /*{
        type: "DailyQuest",
        title: "Daily Quests",
        priority: 50,
        days: {
            "sunday": { elements: ["Sun", "Priest", "Mage", "Alchemist"], short:"Sun" },
            "monday": { elements: ["Moon", "Gold", "Warrior"], short:"Mon" },
            "tuesday": { elements: ["Fire", "Knight", "Priest"], short:"Tue" },
            "wednesday": { elements: ["Water", "Gold", "Mage"], short:"Wed" },
            "thursday": { elements: ["Wind", "Warrior", "Alchemist"], short:"Thu" },
            "friday": { elements: ["Gold", "Priest", "Mage"], short:"Fri" },
            "saturday": { elements: ["Earth", "Warrior", "Knight"], short:"Sat" }
        }
    },
    
  */
	{
        "type": "WeekendBoss",
        "title": [
			"Pleased Sapphire Lips Kimochi Battle",
            "キモチ戦悦ぶサファイアの唇"
        ],
        "image": [
            "imgs/2411/banner_0314_m.png"
        ],
        "column": 0,
        "priority": 6,
        "timers": [
			{
				name: "Part 1 - Day 1",
				start: "Dec 5 2022, 17:00",
				end: "Dec 6 2022, 15:59"
			},
			{
				name: "Part 1 - Day 2",
				start: "Dec 6 2022, 16:00",
				end: "Dec 7 2022, 15:59"
			},
			{
				name: "Part 2 - Day 1",
				start: "Dec 7 2022, 17:00",
				end: "Dec 8 2022, 15:59"
			},
			{
				name: "Part 2 - Day 2",
				start: "Dec 8 2022, 16:00",
				end: "Dec 9 2022, 15:59"
			},
			{
				name: "Part 2 - Day 3",
				start: "Dec 9 2022, 16:00",
				end: "Dec 10 2022, 15:59"
			},
            {
                "name": "Main Event",
                "start": "Dec 5 2022, 17:00",
                "end": "Dec 10 2022, 15:59",
                "extraPriority": 1000,
				"type": "normal",
				markers: 
				[{time: "Oct 7 2022, 17:00", title: "Part 2 - Groups", type: "battle"}]
			}
			]
    },
		{
        "type": "WeekendBoss",
        "title": [
			"Ranked Mirrors",
			"ミラーズランキング"
        ],
        "image": [
            "imgs/mirroran.png"
        ],
        "column": 0,
        "priority": 8,
        "timers": [
			{
				name: "Preliminaries - Day 1",
				start: "Nov 7 2022, 17:00",
				end: "Nov 8 2022, 15:59"
			},
			{
				name: "Preliminaries - Day 2",
				start: "Nov 8 2022, 16:00",
				end: "Nov 9 2022, 15:59"
			},
			{
				name: "Preliminaries - Day 3",
				start: "Nov 9 2022, 16:00",
				end: "Nov 10 2022, 15:59"
			},
			{
				name: "Preliminaries - Day 4",
				start: "Nov 10 2022, 16:00",
				end: "Nov 11 2022, 15:59"
			},
			{
				name: "Preliminaries - Day 5",
				start: "Nov 11 2022, 16:00",
				end: "Nov 12 2022, 15:59"
			},
			{
				name: "Finals",
				start: "Nov 12 2022, 17:00",
				end: "Nov 13 2022, 20:59"
			},
            {
                "name": "Main Event",
                "start": "Nov 7 2022, 17:00",
                "end": "Nov 13 2022, 20:59",
                "extraPriority": 1000,
				"type": "normal",
				markers: 
				[{time: "Nov 12 2022, 17:00", title: "Finals", type: "battle"}]
			}
			]
    },
	{
        "type": "Event",
        "title": [
            "Winter Campaign",
			"ウィンターキャンペーン"
        ],
        "image": [
            "imgs/1912/banner_0640_m.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "1/2 AP, x2 PLAYER EXP, x2 Support Pt & x2 Magical Strengthening Great and Super Success Rate",
				start: "Dec 20 2022, 16:00",
				end: "Jan 10 2023, 14:59"
			},
			{
				name: "Limited-time Daily Missions",
				start: "Dec 21 2022, 0:00",
				end: "Jan 10 2023, 23:59"
			},
			{
				name: "Twitter RT Campaign",
				start: "Dec 20 2022, 16:00",
				end: "Dec 25 2022, 23:59"
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "Christmas Login Bonus",
			"クリスマスログインボーナス"
        ],
        "image": [
            "imgs/1912/banner_0634_m.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "Login Bonus",
				start: "Dec 25 2022, 00:00",
				end: "Dec 25 2022, 23:59"
			}
        ]
    },
{
        "type": "Event",
        "title": [
			"Battle Museum III",
			"バトルミュージアム"
        ],
        "image": [
            "imgs/1411/banner_0530_m.png"
        ],
        "column": 0,
        "priority": 10,
        "timers": [
			{
				name: "Main Event",
				start: "Nov 14 2022, 17:00",
				end: "Nov 25 2022, 14:59",
				extraPriority: 100
			}
        ]
   },
	{
        "type": "Event",
        "title": [
			"Winter Recollection ～From We Who Are Still Transparent～",
			"Winter Recollection～まだ透明な私たちより～"
        ],
        "image": [
            "imgs/1112/banner_0637_m.png"
        ],
        "column": 0,
        "priority": 8,
        "timers": [
			{
				name: "Main Event",
				start: "Dec 12 2022, 17:00",
				end: "Dec 20 2022, 14:59",
				extraPriority: 100
				//markers: 
				//[{time: "Nov 30 2022, 16:00", title: "Story Quests 11-20 & 100Evils I-III", type: "battle"}]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
			"Winter Recollection ～From We Who Are Still Transparent～ Story of Myths",
			"Winter Recollection ～まだ透明な私たちより～ 幻の物語"
        ],
        "image": [
            "imgs/1912/banner_0638_m.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				name: "Main Event",
				start: "Dec 20 2022, 16:00",
				end: "Dec 31 2022, 14:59",
				extraPriority: 100,
				markers: 
				[{time: "Dec 26 2022, 16:00", title: "Story Quests 11-25 & 100Evils I-III", type: "battle"}]
			}
        ]
    },
	{
        "type": "Shop",
        "title": [
            "Shops and Limited-time Missions",
			"ショップと期間限定ミッション"
        ],
        "image": [
            "shop"
        ],
        "column": 2,
        "priority": 100,
        "timers": [
			{
				name: "Adjuster Coin Shop: Green - Kagome Gacha",
				start: "Nov 25 2022, 16:00",
				end: "Dec 12 2022, 14:59"
			},
			{
				name: "4★ Memoria Selection Ticket Exchange - Kagome Step-UP Gacha",
				start: "Nov 25 2022, 16:00",
				end: "Dec 12 2022, 14:59"
			},
			{
				name: "Mish Mash!? Aru-chan Alert! - Event Shop and Missions",
				start: "Nov 25 2022, 16:00",
				end: "Dec 12 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Navy Blue - Forest Attribute Gacha",
				start: "Dec 5 2022, 17:00",
				end: "Dec 19 2022, 14:59"
			},
			{
				name: "Pleased Sapphire Lips Kimochi Battle - Event Shop ",
				start: "Dec 5 2022, 17:00",
				end: "Dec 19 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Purple - Christmas 2017-2020 Magical Girls Gachas",
				start: "Dec 12 2022, 17:00",
				end: "Dec 27 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Red - Mifuyu (Fairy Tale ver.) Gacha",
				start: "Dec 12 2022, 17:00",
				end: "Dec 27 2022, 14:59"
			},
			{
				name: "Winter Recollection: Mifuyu Side - Event Shop and Missions",
				start: "Dec 12 2022, 17:00",
				end: "Dec 27 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Water - Yachiyo (Fairy Tale ver.) Gacha",
				start: "Dec 20 2022, 16:00",
				end: "Jan 7 2023, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Yellow Green - Christmas 2021 Magical Girls Gachas",
				start: "Dec 20 2022, 16:00",
				end: "Jan 7 2023, 14:59"
			},
			{
				name: "Winter Recollection: Yachiyo Side - Event Shop and Missions",
				start: "Dec 20 2022, 16:00",
				end: "Jan 7 2023, 14:59"
			},
			{
				name: "Christmas 2022 Costume Shop",
				start: "Dec 20 2022, 16:00",
				end: "Jan 7 2023, 14:59"
			}
        ]
    },
	{
		type: "Other",
		title: [
		"1900 Days Anniversary Packs",
		"1900日記念パック"
		],
		image: [
            "imgs/0611/banner_0630_m.png"
        ],
		column: 2,
		priority: 20,
		timers: [ 
		{
			name: "Sales period",
			start: "Nov 7 2022, 17:00",
			end: "Nov 14 2022, 14:59",
			extraPriority: 1000
		}
		]
	},
{
		type: "Other",
		title: [
		"Ranking Mirrors Related Packs",
		"『ミラーズランキング』関連パックの販売"
		],
		image: [
            "imgs/0611/banner_0632_m.png"
        ],
		column: 2,
		priority: 19,
		timers: [ 
		{
			name: "Sales period",
			start: "Nov 7 2022, 17:00",
			end: "Nov 14 2022, 14:59",
			extraPriority: 0
		},
		{
			name: "Mirrors Selection Pack Ticket Exchange",
			start: "Nov 7 2022, 17:00",
			end: "Nov 21 2022, 14:59",
			extraPriority: 1000
		}
		]
	},
		{
		type: "Other",
		title: [
		"Forest Attribute Strengthening Pack",
		"木属性魔法少女育成パック"
		],
		image: [
            "imgs/0412/banner_0556_m.png"
        ],
		column: 2,
		priority: 10,
		timers: [ 
		{
			name: "Sales period",
			start: "Dec 5 2022, 17:00",
			end: "Dec 12 2022, 14:59",
			extraPriority: 100
		}
		]
	},
	{
        type: "Maintenance",
        title: [
            "Maintenance",
			"维护"
        ],
		"image": [
			"imgs/maintenance.png"
		],
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "Dec 12 2022, 15:00",
                end: "Dec 12 2022, 17:00",
				extraPriority: 1000
            }
        ]
    },
	{
        type: "Maintenance",
        title: [
            "Maintenance & App version 2.6.3 Update",
			"维护&アプリバージョン2.6.3強制アップデート"
        ],
		"image": [
			"imgs/maintenance.png"
		],
        column: 0,
        priority: 7,
        timers: [
            {
                name: "Scheduled Time",
                start: "Dec 20 2022, 15:00",
                end: "Dec 20 2022, 16:00",
				extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Azusa Mifuyu (Fairy Tale ver.) Pickup & Step-UP Gacha",
            "期間限定 梓みふゆ おとぎ話ver.ピックアップとステップアップガチャ"
        ],
        "image": [
            "imgs/1112/gachabanner_1186_m.png",
			"imgs/1112/gachabanner_1187_m.png"
        ],
        "column": 1,
        "priority": 20,
        "timers": [
            {
                name: "Duration",
                start: "Dec 12 2022, 17:00",
				end: "Dec 20 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Nanami Yachiyo (Fairy Tale ver.) Pickup & Step-UP Gacha",
            "期間限定 七海やちよ おとぎ話ver.ピックアップとステップアップガチャ"
        ],
        "image": [
            "imgs/1912/gachabanner_1216_m.png",
			"imgs/1912/gachabanner_1217_m.png"
        ],
        "column": 1,
        "priority": 22,
        "timers": [
            {
                name: "Duration",
                start: "Dec 20 2022, 16:00",
				end: "Dec 31 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"Limited-time Nayuta & Mikage (Christmas ver.) Pickup Gacha",
            "期間限定 那由他・みかげクリスマスver. ピックアップガチャ"
        ],
        "image": [
            "imgs/1912/gachabanner_1222_m.png"
        ],
        "column": 1,
        "priority": 20,
        "timers": [
            {
                name: "Duration",
                start: "Dec 20 2022, 16:00",
				end: "Dec 31 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"Limited-time Holy Mami (Anime ver.) Pickup Gacha",
            "期間限定 ホーリーマミ アニメver.ピックアップガチャ"
        ],
        "image": [
            "imgs/1912/gachabanner_1223_m.png"
        ],
        "column": 1,
        "priority": 20,
        "timers": [
            {
                name: "Duration",
                start: "Dec 20 2022, 16:00",
				end: "Dec 31 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Christmas Magical Girls 2021 Pickup & Step-UP gacha",
            "期間限定 クリスマス魔法少女2021ピックアップとステップアップガチャ"
        ],
        "image": [
            "imgs/1912/gachabanner_1224_m.png"
        ],
        "column": 1,
        "priority": 20,
        "timers": [
            {
                name: "Duration",
                start: "Dec 20 2022, 16:00",
				end: "Dec 31 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Christmas Magical Girls 2019-2020 Pickup & Step-UP gacha",
            "期間限定 クリスマス魔法少女2019-2020 ピックアップとステップアップガチャ"
        ],
        "image": [
            "imgs/1112/gachabanner_1192_m.png",
			"imgs/1112/gachabanner_1193_m.png"
        ],
        "column": 1,
        "priority": 19,
        "timers": [
            {
                name: "Duration",
                start: "Dec 12 2022, 17:00",
				end: "Dec 20 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Christmas Magical Girls 2017-2018 Pickup & Step-UP gacha",
            "期間限定 クリスマス魔法少女2017-2018 ピックアップとステップアップガチャ"
        ],
        "image": [
            "imgs/1112/gachabanner_1203_m.png",
			"imgs/1112/gachabanner_1204_m.png"
        ],
        "column": 1,
        "priority": 18,
        "timers": [
            {
                name: "Duration",
                start: "Dec 12 2022, 17:00",
				end: "Dec 20 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Forest Attribute Pickup Gacha",
            "木属性魔法少女ピックアップガチャ"
        ],
        "image": [
            "imgs/0412/gachabanner_1182_m.png"
        ],
        "column": 1,
        "priority": 10,
        "timers": [
            {
                name: "Duration",
                start: "Dec 5 2022, 17:00",
				end: "Dec 12 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"Limited-time Paid 4★ Attribute Attribute Magical Girl Guaranteed Gacha",
            "有償限定木属性★4魔法少女確定ガチャ"
        ],
        "image": [
            "imgs/0412/gachabanner_1183_m.png"
        ],
        "column": 1,
        "priority": 10,
        "timers": [
            {
                name: "Duration",
                start: "Dec 5 2022, 17:00",
				end: "Dec 12 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time paid Step-UP Gacha: Battle Museum Edition",
            "有償限定 ステップアップガチャ バトルミュージアム編"
        ],
        "image": [
            "imgs/1411/gachabanner_1165_m.png"
        ],
        "column": 1,
        "priority": 10,
        "timers": [
            {
                name: "Duration",
                start: "Nov 14 2022, 17:00",
				end: "Nov 25 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time ★4 Memoria Selection Gacha",
            "選べる★4メモリアセレクションガチャ"
        ],
        "image": [
            "imgs/0611/gachabanner_1156_m.png"
        ],
        "column": 1,
        "priority": 9,
        "timers": [
            {
                name: "Duration",
                start: "Nov 7 2022, 17:00",
				end: "Nov 14 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"Limited-time Paid 4★ Dark Attribute Magical Girl Guaranteed Gacha",
            "有償限定闇属性★4魔法少女確定ガチャ"
        ],
        "image": [
            "imgs/0210/gachabanner_1132_m.png"
        ],
        "column": 1,
        "priority": 18,
        "timers": [
            {
                name: "Duration",
                start: "Oct 3 2022, 17:00",
				end: "Oct 11 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Daily Free 10 pull Rare Gacha",
            "10連レアガチャ毎日1回無料"
        ],
        "image": [
            "imgs/1912/banner_0641_m.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                name: "Duration",
                start: "Dec 21 2022, 00:00",
				end: "Jan 10 2023, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "Dec 21 2022, 00:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "Dec 22 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "Dec 23 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "Dec 24 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "Dec 25 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "Dec 26 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "Dec 27 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "Dec 28 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "Dec 29 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "Dec 30 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "Dec 31 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Jan 1 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Jan 2 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Jan 3 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "Jan 4 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 16",
					time: "Jan 5 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 17",
					time: "Jan 6 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 18",
					time: "Jan 7 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 19",
					time: "Jan 8 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 20",
					time: "Jan 9 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 21",
					time: "Jan 10 2023, 0:00",
					type: "star"
				}
				]
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"5th Anniversary Choose your 4★ Memoria Selection Gacha ",
            "5周年記念 選べる★4メモリアセレクションガチャ"
        ],
        "image": [
            "imgs/anniv/gachabanner_1101_m.png"
        ],
        "column": 1,
        "priority": 18,
        "timers": [
            {
                name: "Duration",
                start: "Aug 22 2022, 16:00",
				end: "Sep 5 2022, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "Aug 22 2022, 16:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "Aug 23 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "Aug 24 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "Aug 25 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "Aug 26 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "Aug 27 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "Aug 28 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "Aug 29 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "Aug 30 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "Aug 31 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "Sep 1 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Sep 2 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Sep 3 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Sep 4 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "Sep 5 2022, 0:00",
					type: "star"
				}
				]
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"Limited-time Past Halloween Gachas Rerun",
            "期間限定 ハロウィン魔法少女編ピックアップガチャ復刻"
        ],
        "image": [
            "imgs/0910/gachabanner_1133_m.png",
			"imgs/0910/gachabanner_1134_m.png",
			"imgs/0910/gachabanner_1135_m.png"
			

        ],
        "column": 1,
        "priority": 17,
        "timers": [
            {
                name: "Duration",
                start: "Oct 11 2022, 16:00",
				end: "Oct 24 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time paid Step-UP Gacha: Halloween Edition",
            "有償限定 ステップアップガチャハロウィン魔法少女編"
        ],
        "image": [
            "imgs/0910/gachabanner_1136_m.png"
        ],
        "column": 1,
        "priority": 16,
        "timers": [
            {
                name: "Duration",
                start: "Oct 11 2022, 16:00",
				end: "Oct 24 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"5th Anniversary Choose your 4★ Limited Magical Girl Pickup Gacha ",
            "5周年記念 選べる期間限定★4魔法少女ピックアップガチャ"
        ],
        "image": [
            "imgs/anniv/gachabanner_1107_m.png"
        ],
        "column": 1,
        "priority": 15,
        "timers": [
            {
                name: "Duration",
                start: "Sep 5 2022, 16:00",
				end: "Sep 20 2022, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "Sep 5 2022, 16:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "Sep 6 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "Sep 7 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "Sep 8 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "Sep 9 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "Sep 10 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "Sep 11 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "Sep 12 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "Sep 13 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "Sep 14 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "Sep 15 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Sep 16 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Sep 17 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Sep 18 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "Sep 19 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 16",
					time: "Sep 20 2022, 0:00",
					type: "star"
				}
				]
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"5th Anniversary Choose your 4★ Limited Memoria Selection Gacha ",
            "5周年記念 選べる期間限定★4メモリアセレクションガチャ"
        ],
        "image": [
            "imgs/anniv/gachabanner_1108_m.png"
        ],
        "column": 1,
        "priority": 14,
        "timers": [
            {
                name: "Duration",
                start: "Sep 5 2022, 16:00",
				end: "Sep 20 2022, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "Sep 5 2022, 16:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "Sep 6 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "Sep 7 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "Sep 8 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "Sep 9 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "Sep 10 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "Sep 11 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "Sep 12 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "Sep 13 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "Sep 14 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "Sep 15 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Sep 16 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Sep 17 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Sep 18 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "Sep 19 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 16",
					time: "Sep 20 2022, 0:00",
					type: "star"
				}
				]
            }
        ]
    }
];
