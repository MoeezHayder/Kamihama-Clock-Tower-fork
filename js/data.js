var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "July 23 2021, 18:00";
var nextAnniversary = "August 22 2021, 0:00";
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
    
    {
        "type": "Event",
        "title": [
            "No Laughing in the Maid Manor!",
            "メイド館では笑えない！",
            "Maid 2021 Event"
        ],
        "image": [
            "https://i.imgur.com/NjKzQaN.png",
            "https://i.imgur.com/5UpNoBs.png",
            "https://i.imgur.com/XVjhDho.png",
            "https://i.imgur.com/pLSTVc3.png",
            "https://i.imgur.com/g8JoM7F.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "April 27 2021, 17:00",
                "end": "May 14 2021, 15:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "May 5 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "May 6 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "May 7 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "May 8 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "April 29 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "May 1 2021, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "April 27 2021, 17:00",
                "end": "May 14 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "April 27 2021, 17:00",
                "end": "May 21 2021, 13:59"
            }
        ]
    },*/
	{
        "type": "Event",
        "title": [
			"【Event】",
            "The Legendary Story of the Paper Mulberry Leaf",
			"～These Shaking Feelings are Once Again Fascinating～"
        ],
        "image": [
            "imgs/banner_0495_m.png"
        ],
        "column": 0,
        "priority": 34,
        "timers": [
			{
				name: "Maintenance",
				start: "June 28 2021, 15:00",
				end: "June 28 2021, 15:59",
				extraPriority: 10
			},
            {
                "name": "Main Event",
                "start": "June 28 2021, 16:00",
                "end": "July 12 2021, 14:59",
                "extraPriority": 10,
				"markers": [
				{
					title: "Story quests 11-20 & 100Evil I-III",
					time: "July 5 2021, 17:00",
					type: "battle"
				}
				]
            }
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Event】",
            "The Call of the Open Sea"
        ],
        "image": [
            "imgs/banner_0493_m.png"
        ],
        "column": 0,
        "priority": 33,
        "timers": [
			{
				name: "Maintenance",
				start: "July 12 2021, 15:00",
				end: "July 12 2021, 15:59",
				extraPriority: 10
			},
            {
                "name": "Main Event",
                "start": "July 12 2021, 16:00",
                "end": "July 26 2021, 14:59",
                "extraPriority": 10,
				"markers": [
				{
					title: "Second Part",
					time: "July 19 2021, 17:00",
					type: "battle"
				}
				]
            }
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Campaign】",
            "Summer Missions"
        ],
        "image": [
            "imgs/banner_0492_m.png"
        ],
        "column": 0,
        "priority": 33,
        "timers": [
            {
                "name": "Duration",
                "start": "June 28 2021, 16:00",
                "end": "August 6 2021, 14:59",
                "extraPriority": 10,
				"markers": [
				{
					title: "Missions 1-5",
					time: "June 28 2021, 16:00",
					type: "battle"
				},
				{
					title: "Missions 6-10",
					time: "July 5 2021, 17:00",
					type: "battle"
				},
				{
					title: "Missions 11-15",
					time: "July 12 2021, 16:00",
					type: "battle"
				},
				{
					title: "Missions 15-20",
					time: "July 19 2021, 17:00",
					type: "battle"
				},
				{
					title: "Missions 21-26",
					time: "July 26 2021, 16:00",
					type: "battle"
				}
				]
            },
			{
				"name": "Guaranteed 4★ Ticket Exchange",
                "start": "July 26 2021, 16:00",
                "end": "August 13 2021, 14:59"
			}
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Event】",
            "Extermination Battle: Witches' Paradox",
			"Main Story Arc 2 Chapter 6 Release"
        ],
        "image": [
            "imgs/banner_0487_m.png",
			"imgs/banner_1030600_m.png"
        ],
        "column": 0,
        "priority": 35,
        "timers": [
			{
				name: "Maintenance",
				start: "June 21 2021, 15:00",
				end: "June 21 2021, 16:59",
				extraPriority: 10
			},
            {
                "name": "Main Event",
                "start": "June 21 2021, 17:00",
                "end": "June 28 2021, 14:59",
                "extraPriority": 10,
				"markers": [
				{
					title: "Challenge Stage",
					time: "June 23 2021, 16:00",
					type: "battle"
				},
				{
					title: "EX Challenge Stage",
					time: "June 25 2021, 16:00",
					type: "battle"
				}
				]
            }
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Mirrors Ranking】",
            "11th Session"
        ],
        "image": [
            "mirroran"
        ],
        "column": 0,
        "priority": 33, /*7/5 17:00～7/11 20:59 JST*/
        "timers": [
			{
				name: "Maintenance",
				start: "July 19 2021, 15:00",
				end: "July 19 2021, 16:59",
				extraPriority: 20
			},
			{
				name: "Main Event",
				start: "July 19 2021, 17:00",
				end: "July 25 2021, 20:59",
				extraPriority: 20
			}
        ]
    },
	{
        "type": "Shop",
        "title": [
            "【Shops and Limited-time Missions】"
        ],
        "image": [
            "shop"
        ],
        "column": 2,
        "priority": 10,
        "timers": [
			/*{
				name: "Monthly Magia Stones Shops - July",
				start: "July 1 2021, 00:00",
				end: "July 31 2021, 23:59"
			},*/
			{
				name: "1400 Days Since Release - Medal Shop",
				start: "June 11 2021, 17:00",
				end: "July 5 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "Adjuster Coins Shop: Brown - Choose your 4★ Memoria Selection Gacha",
				"start": "June 11 2021, 16:00",
				"end": "July 5 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "Adjuster Coins Shop: Blue - Nanami Yachiyo (Tanabata ver.) Pickup Gacha",
				"start": "June 28 2021, 16:00",
				"end": "July 19 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "The Legendary Story of the Paper Mulberry Leaf - Event Shop and Missions",
				"start": "June 28 2021, 16:00",
				"end": "July 19 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "Swimsuit Costume Tickets - Exchange Shop",
				"start": "June 28 2021, 16:00",
				"end": "August 13 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "The Call of the Open Sea - Event Shop and Missions",
				"start": "July 12 2021, 16:00",
				"end": "August 2 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "Adjuster's Coins Shop: Black - Summer Limited-time Gachas",
				"start": "July 12 2021, 16:00",
				"end": "August 2 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				name: "A. C. Shop: Yellow-Green - Choose your 4★ Memoria Selection Gacha",
				start: "July 19 2021, 17:00",
				end: "August 2 2021, 14:59"
			},
			{
				name: "Adjuster Coins Shop: Green - TV Anime 2nd Season Celebration", /*2021 9/26 14:59*/
				start: "July 3 2021, 00:00",
				end: "September 26 2021, 14:59"
			},
			{
				name: "Mirrors Ranking - Limited-time Shop and Missions",
				start: "July 19 2021, 17:00",
				end: "August 2 2021, 14:59"
			},
			{
				name: "Mirrors Ranking - Limited-time Shop and Missions",
				start: "July 19 2021, 17:00",
				end: "August 2 2021, 14:59"
			}
        ]
    },
	{
		type: "Other",
		title: [
		"【Premium Bundle】",
		"1400 Days since Release Commemorative Bags"
		],
		image: [
            "imgs/banner_0489_m.png"
        ],
		column: 2,
		priority: 9,
		timers: [
		{
			name: "Sales period",
			start: "June 11 2021, 16:00",
			end: "June 28 2021, 14:59",
			keepAfterFinished: "9 hours"
		},
		{
			name: "4★ Magical Girl & Memoria Selection Tickets Exchange",
			start: "June 11 2021, 16:00",
			end: "July 5 2021, 14:59",
			keepAfterFinished: "9 hours"
		}
		]
	},
	{
		type: "Other",
		title: [
		"【Paid Shop】",
		"Mirrors Selection Pack & Mirrors Beginner Pack"
		],
		image: [
            "imgs/banner_0436_m.png"
        ],
		column: 2,
		priority: 8,
		timers: [ /*7/5 17:00～7/12 14:59*/
		{
			name: "Sales period",
			start: "July 5 2021, 17:00",
			end: "July 26 2021, 14:59",
			keepAfterFinished: "9 hours"
		},
		{
			name: "Ticket Exchange",
			start: "July 5 2021, 17:00",
			end: "August 2 2021, 14:59",
			keepAfterFinished: "9 hours"
		}
		]
	},
	/*{
        type: "Maintenance",
        title: [
            "Maintenance"
        ],
		"image": "maintenance",
        column: 0,
        priority: 39,
        timers: [
            {
                name: "Scheduled Time",
                start: "May 24 2021, 15:00",
                end: "May 24 2021, 16:00",
                keepAfterFinished: "60 minutes",
				extraPriority: 10
            }
        ]
    },*/
	{
        "type": "Gacha",
        "title": [
			"【Gacha】",
            "Choose Your 4* Memoria Selection Gacha"
        ],
        "image": [
            "imgs/gachabanner_0705_m.png"
        ],
        "column": 1,
        "priority": 60,
        "timers": [
            {
                "name": "Duration",
                "start": "July 19 2021, 17:00",
                "end": "July 26 2021, 14:59",
                "extraPriority": 10,
				keepAfterFinished: "9 hours",
				markers: [
				{
					title: "2nd Pool",
					time: "July 23 2021, 15:00",
					type: "star"
				}
				]
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited-time Gacha】",
            "Momoko and Mitama (Mermaid ver.) Pickup Gacha"
        ],
        "image": [
            "imgs/gachabanner_0711_m.png"
        ],
        "column": 1,
        "priority": 72,
        "timers": [
            {
                "name": "Duration",
                "start": "July 12 2021, 16:00",
                "end": "July 26 2021, 14:59",
                "extraPriority": 10,
				keepAfterFinished: "9 hours"
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited-time Gacha Rerun】",
            "The Crescent Moon Manor's Summer Vacation Pickup Gacha",
			"The Ribbon at the Beach Pickup Gacha"
        ],
        "image": [
            "imgs/gachabanner_0714_m.png",
			"imgs/gachabanner_0713_m.png"
        ],
        "column": 1,
        "priority": 71,
        "timers": [
            {
                "name": "Duration",
                "start": "July 12 2021, 16:00",
                "end": "July 26 2021, 14:59",
                "extraPriority": 10,
				keepAfterFinished: "9 hours"
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited-time Gacha Rerun】",
            "The Ephemeral Summer Night Pickup Gacha",
			"SamaTore! Pickup Gacha"
        ],
        "image": [
            "imgs/gachabanner_0724_m.png",
			"imgs/gachabanner_0725_m.png"
        ],
        "column": 1,
        "priority": 70,
        "timers": [
            {
                "name": "Duration",
                "start": "July 26 2021, 16:00",
                "end": "August 10 2021, 14:59",
                "extraPriority": 10,
				keepAfterFinished: "9 hours"
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Paid Gacha】",
            "2018 4★ Swimsuit Magical Girl Guaranteed Gacha"
        ],
        "image": [
            "imgs/gachabanner_0715_m.png"
        ],
        "column": 1,
        "priority": 70,
        "timers": [
            {
                "name": "Duration",
                "start": "July 12 2021, 16:00",
                "end": "July 26 2021, 14:59",
                "extraPriority": 10,
				keepAfterFinished: "9 hours"
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Paid Gacha】",
            "2019 4★ Swimsuit Magical Girl Guaranteed Gacha"
        ],
        "image": [
            "imgs/gachabanner_0726_m.png"
        ],
        "column": 1,
        "priority": 70,
        "timers": [
            {
                "name": "Duration",
                "start": "July 26 2021, 16:00",
                "end": "August 10 2021, 14:59",
                "extraPriority": 10,
				keepAfterFinished: "9 hours"
            }
        ]
    },
    {
        type: "Event",
        title: [
			"【Campaign】",
            "1400 Days Since Release"
        ],
        image: [
			"imgs/banner_0488_m.png",
			"imgs/banner_0490_m.png"
		],
        column: 0,
		priority: 35,
        timers: [
            {
                name: "Login Bonus",
                start: "June 11 2021, 16:00",
                end: "June 28 2021, 23:59",
				extraPriority: 10
            },
			{
				name: "1/2 AP, x2 Player EXP, 2x Support Points, 2x Great Success & Super Success",
				start: "June 11 2021, 16:00",
                end: "June 28 2021, 14:59"
			},
			{
				name: "Guaranteed 4★ Magical Girl Ticket Exchange",
				start: "June 17 2021, 00:00",
				end: "July 5 2021, 23:59"
			}
        ]
    },
	{
		type: "LoginDays",
		title: [
			"【Campaign】",
            "Free Rolls in occasion of the 2nd SEASON of the TV Anime"
		],
		image: [
			"imgs/banner_0496_m.png"
		],
		column: 1,
		priority: 75,
		timers: [
			{
				name: "Free roll 1",
				date: "July 3 2021",
				days: "1"
			},
			{
				name: "Free roll 2",
				date: "July 4 2021",
				days: "1"
			},
			{
				name: "Free roll 3",
				date: "July 10 2021",
				days: "1"
			},
			{
				name: "Free roll 4",
				date: "July 11 2021",
				days: "1"
			},
			{
				name: "Free roll 5",
				date: "July 17 2021",
				days: "1"
			},
			{
				name: "Free roll 6",
				date: "July 18 2021",
				days: "1"
			}
			,
			{
				name: "Free roll 7",
				date: "July 24 2021",
				days: "1"
			},
			{
				name: "Free roll 8",
				date: "July 25 2021",
				days: "1"
			},
			{
				name: "Free roll 9",
				date: "July 31 2021",
				days: "1"
			},
			{
				name: "Free roll 10",
				date: "August 1 2021",
				days: "1"
			},
			{
				name: "Free roll 11",
				date: "August 7 2021",
				days: "1"
			},
			{
				name: "Free roll 12",
				date: "August 8 2021",
				days: "1"
			},
			{
				name: "Free roll 13",
				date: "August 14 2021",
				days: "1"
			},
			{
				name: "Free roll 14",
				date: "August 15 2021",
				days: "1"
			},
			{
				name: "Free roll 15",
				date: "August 21 2021",
				days: "1"
			},
			{
				name: "Free roll 16",
				date: "August 22 2021",
				days: "1"
			},
			{
				name: "Free roll 17",
				date: "August 28 2021",
				days: "1"
			},
			{
				name: "Free roll 18",
				date: "August 29 2021",
				days: "1"
			},
			{
				name: "Free roll 19",
				date: "September 4 2021",
				days: "1"
			},
			{
				name: "Free roll 20",
				date: "September 5 2021",
				days: "1"
			},
			{
				name: "Free roll 21",
				date: "September 11 2021",
				days: "1"
			},
			{
				name: "Free roll 22",
				date: "September 12 2021",
				days: "1"
			},
			{
				name: "Free roll 23",
				date: "September 18 2021",
				days: "1"
			},
			{
				name: "Free roll 24",
				date: "September 19 2021",
				days: "1"
			}
		]
	}
];
