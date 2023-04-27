import { IPlayer, ITeam } from "./interface";

export const TeamOneArray: string[] = Array.from(Array(11))
  .map((e, i) => {
    return `T1-${i + 1}`
  });

export const TeamTwoArray: string[] = Array.from(Array(11))
  .map((e, i) => {
    return `T2-${i + 1}`
  });

export const Persons: string[] = [
  'Dharmik',
  'Milan',
  'Jigar',
  'Meet',
  'Dhaval',
  'Jaydev',
  'Vatsal',
  'Bhargav',
  'Kunj',
  'Yash'
];

export const Team: ITeam[] = [
  { name: 'Gujarat Titans', value: 'GT' },
  { name: 'Chennai Super Kings', value: 'CSK' },
  { name: 'Mumbai Indians', value: 'MI' },
  { name: 'Delhi Capitals', value: 'DC' },
  { name: 'Kolkata Knight Riders', value: 'KKR' },
  { name: 'Lucknow Super Giants', value: 'LSG' },
  { name: 'Punjab Kings', value: 'PBKS' },
  { name: 'Rajasthan Royals', value: 'RR' },
  { name: 'Sunrisers Hyderabad', value: 'SRH' },
  { name: 'Royal Challengers Bangalore', value: 'RCB' },
]

export const Players: IPlayer = {
  GT: [
    'Abhinav Manohar',
    'David Miller',
    'Sai Sudharsan',
    'Shubman Gill',
    'Hardik Pandya',
    'Vijay Shankar',
    'Rahul Tewatia',
    'Dasun Shanaka',
    'Rashid Khan',
    'Shivam Mavi',
    'Srikar Bharat',
    'Urvil Patel',
    'Wriddhiman Saha',
    'Matthew Wade',
    'Alzarri Joseph',
    'Joshua Little',
    'Darshan Nalkande',
    'Mohammed Shami',
    'Noor Ahmad',
    'Sai Kishore',
    'Pradeep Sangwan',
    'Mohit Sharma',
    'Odean Smith',
    'Jayant Yadav',
    'Yash Dayal'
  ],
  CSK: [
    'Ruturaj Gaikwad',
    'Ajinkya Rahane',
    'Shaik Rasheed',
    'Ambati Rayudu',
    'Subhranshu Senapati',
    'Moeen Ali',
    'Nishant Sindhu',
    'Ben Stokes',
    'Bhagath Varma',
    'Shivam Dube',
    'Ravindra Jadeja',
    'Dwaine Pretorius',
    'Mitchell Santner',
    'MS Dhoni',
    'Devon Conway',
    'Deepak Chahar',
    'Tushar Deshpande',
    'RS Hangargekar',
    'Sisanda Magala',
    'Ajay Jadav Mandal',
    'Matheesha Pathirana',
    'Simarjeet Singh',
    'Prashant Solanki',
    'Maheesh Theekshana',
    'Akash Singh'
  ],
  MI: [
    'Rohit Sharma',
    'Dewald Brevis',
    'Ramandeep Singh',
    'Tilak Varma',
    'Nehal Wadhera',
    'Suryakumar Yadav',
    'Tim David',
    'Shams Mulani',
    'Cameron Green',
    'Kumar Kartikeya',
    'Hrithik Shokeen',
    'Arjun Tendulkar',
    'Ishan Kishan',
    'Tristan Stubbs',
    'Vishnu Vinod',
    'Jofra Archer',
    'Arshad Khan',
    'Jason Behrendorff',
    'Piyush Chawla',
    'Raghav Goyal',
    'Duan Jansen',
    'Akash Madhwal',
    'Sandeep Warrier',
    'Riley Meredith'
  ],
  DC: [
    'Yash Dhull',
    'Manish Pandey',
    'Rovman Powell',
    'Rilee Rossouw',
    'Prithvi Shaw',
    'David Warner',
    'Priyam Garg',
    'Lalit Yadav',
    'Mitchell Marsh',
    'Ripal Patel',
    'Aman Hakim Khan',
    'Axar Patel',
    'Sarfaraz Khan',
    'Philip Salt',
    'Abishek Porel',
    'Khaleel Ahmed',
    'Praveen Dubey',
    'Kuldeep Yadav',
    'Mukesh Kumar',
    'Mustafizur Rahman',
    'Lungi Ngidi',
    'Anrich Nortje',
    'Vicky Ostwal',
    'Chetan Sakariya',
    'Ishant Sharma'
  ],
  KKR: [
    'Mandeep Singh',
    'Nitish Rana',
    'Rinku Singh',
    'Jason Roy',
    'Aarya Desai',
    'Venkatesh Iyer',
    'Anukul Roy',
    'David Wiese',
    'Andre Russell',
    'N Jagadeesan',
    'Litton Das',
    'Rahmanullah Gurbaz',
    'Vaibhav Arora',
    'Lockie Ferguson',
    'Harshit Rana',
    'Kulwant Khejroliya',
    'Sunil Narine',
    'Tim Southee',
    'Suyash Sharma',
    'Shardul Thakur',
    'Varun Chakaravarthy',
    'Umesh Yadav'
  ],
  LSG: [
    'Manan Vohra',
    'Prerak Mankad',
    'Ayush Badoni',
    'Deepak Hooda',
    'Karan Sharma',
    'Krunal Pandya',
    'Kyle Mayers',
    'Marcus Stoinis',
    'Krishnappa Gowtham',
    'Daniel Sams',
    'Swapnil Singh',
    'KL Rahul',
    'Quinton de Kock',
    'Nicholas Pooran',
    'Avesh Khan',
    'Mark Wood',
    'Ravi Bishnoi',
    'Jaydev Unadkat',
    'Yash Thakur',
    'Romario Shepherd',
    'Amit Mishra',
    'Naveen-ul-Haq',
    'Yudhvir Singh Charak',
    'Mohsin Khan',
    'Arpit Guleria'
  ],
  PBKS: [
    'Shikhar Dhawan',
    'Harpreet Singh Bhatia',
    'Liam Livingstone',
    'Atharva Taide',
    'Matthew Short',
    'Sikandar Raza',
    'Shahrukh Khan',
    'Mohit Rathee',
    'Harpreet Brar',
    'Sam Curran',
    'Rishi Dhawan',
    'Prabhsimran Singh',
    'Bhanuka Rajapaksa',
    'Jitesh Sharma',
    'Kagiso Rabada',
    'Nathan Ellis',
    'Vidhwath Kaverappa',
    'Rahul Chahar',
    'Baltej Singh',
    'Arshdeep Singh',
    'Shivam Singh',
    'Gurnoor Brar'
  ],
  RR: [
    'Shimron Hetmyer',
    'Yashasvi Jaiswal',
    'Devdutt Padikkal',
    'Kunal Singh Rathore',
    'Joe Root',
    'Riyan Parag',
    'Abdul Basith',
    'Ravichandran Ashwin',
    'Jason Holder',
    'Sanju Samson',
    'Jos Buttler',
    'Donavon Ferreira',
    'Dhruv Jurel',
    'Murugan Ashwin',
    'KM Asif',
    'Trent Boult',
    'KC Cariappa',
    'Yuzvendra Chahal',
    'Obed McCoy',
    'Navdeep Saini',
    'Kuldeep Sen',
    'Akash Vasisht',
    'Kuldip Yadav',
    'Adam Zampa',
    'Sandeep Sharma'
  ],
  SRH: [
    'Abdul Samad',
    'Mayank Agarwal',
    'Anmolpreet Singh',
    'Harry Brook',
    'Aiden Markram',
    'Nitish Reddy',
    'Rahul Tripathi',
    'Samarth Vyas',
    'Sanvir Singh',
    'Vivrant Sharma',
    'Washington Sundar',
    'Abhishek Sharma',
    'Marco Jansen',
    'Heinrich Klaasen',
    'Glenn Phillips',
    'Upendra Yadav',
    'Akeal Hosein',
    'Mayank Dagar',
    'Fazalhaq Farooqi',
    'Kartik Tyagi',
    'Bhuvneshwar Kumar',
    'Mayank Markande',
    'T Natarajan',
    'Adil Rashid',
    'Umran Malik'
  ],
  RCB: [
    'Faf du Plessis',
    'Virat Kohli',
    'Suyash Prabhudessai',
    'Manoj Bhandage',
    'Mahipal Lomror',
    'Glenn Maxwell',
    'Michael Bracewell',
    'Wanindu Hasaranga',
    'Shahbaz Ahmed',
    'David Willey',
    'Wayne Parnell',
    'Finn Allen',
    'Anuj Rawat',
    'Dinesh Karthik',
    'Akash Deep',
    'Avinash Singh',
    'Josh Hazlewood',
    'Siddarth Kaul',
    'Mohammed Siraj',
    'Harshal Patel',
    'Rajan Kumar',
    'Himanshu Sharma',
    'Karn Sharma',
    'Sonu Yadav',
    'Vijaykumar Vyshak'
  ],
}