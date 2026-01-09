// დავალება 1 
// დაწერეთ პროგრამა, რომელიც მომხმარებელს სთხოვს ტექსტური ტიპის მონაცემების შეყვანას, შემდეგ კი Number() ფუნქციის გამოყენებით დააკონვერტირეთ შემოყვანილი მნიშვნელობა და თუ კონვერტაცია წარმატებული იქნება, კონსოლში გამოიტანეთ რიცხვი. თუ კონვერტაცია ვერ მოხდება (ანუ მიღებული იქნება NaN), გამოიტანეთ შეტყობინება "არასწორი ინფუთი“.

let passwordInput = prompt('შეიყვანეთ თქვენი პაროლი:');
let password = Number(passwordInput);

if (isNaN(password)) {
  console.log("არასწორი ინფუთი");
} else {
  console.log(password);
}

// დავალება 2
// მომხმარებელს შემოაყვანინეთ რიცხვი 0 დან 100 მდე ინტერვალში. შეამოწმეთ თუ შემოყვანილი რიცხვის გამოკლებული 10 არის  50-ზე მეტი და 80-ზე ნაკლები, მაშინ კონსოლში დაბეჭდეთ „Yes“ თუ არა და „No”.

let userInput = prompt ('შეიყვანეთ რიცხვი 0-დან 100-მდე');
let number = Number (userInput);

if (userInput - 10 > 50 && userInput - 10 < 80) {
  console.log('Yes');
} else {
  console.log('No');
}

// დავალება 3 
// დაწერეთ პროგრამა, რომელიც ამოწმებს, თუ რიცხვი არის 10 და 50 შორის ინტერვალში და შემდეგ, შეამოწმეთ თუ მოცემული რიცხვი არის 5-ის გამყოფი. თუ ორივე პირობა სწორია, კონსოლში დაბეჭდეთ  "არის 5-ის გამყოფი", სხვა შემთხვევაში დაბეჭდეთ “არ არის 5-ის გამყოფი“.

let userInput3 = prompt ('შეიყვანეთ რიცხვი');

if (userInput3 >= 10 && userInput3 <= 50 && userInput3 % 5 === 0) {
  console.log("არის 5-ის გამყოფი");
} else {
  console.log("არ არის 5-ის გამყოფი");
}

// დავალება 4
// დაწერეთ პროგრამა, რომელიც მომხმარებლის მიერ შემოყვანილ რიცხვს  შეამოწმებს  თუ რიცხვი არის დადებითი, უარყოფითი თუ ნული კონსოლში დაბეჭდეთ შესაბამისი პასუხები.

let userInput4 = prompt ('ჩაწერეთ რიცხვი');

if (userInput4 == 0) {
    console.log ('ნული')
} else if (userInput4 > 0) {
    console.log ('დადებითი რიცხვი')
} else {
    console.log ('უარყოფითი რიცხვი')
}

// დავალება 5
// დაწერეთ პროგრამა, რომელიც შეამოწმებს მომხმარებლის მიერ შემოყვანილ თვეების შესაბამის რიცხვს (1-დან 12-ჩათვლით) და კონსოლში დაბეჭდავს  სეზონს:
// 1, 2, 3 => ზამთარი
// 4, 5, 6 => გაზაფხული
// 7, 8, 9 => ზაფხული
// 10, 11, 12 => შემოდგომა 
// გამოიყენეთ switch სტრუქტურა.

let seasonMonth = prompt ('ჩაწერეთ სასურველი თვის რიცხვითი მნიშვნელობა (1-დან 12 ჩთ.)');

switch (seasonMonth) {
    case "1":
    case "2":
    case "3":
        console.log ('ზამთარი')
        break;
    case "4":
    case "5":
    case "6":
        console.log ('გაზაფხული')
        break;
    case "7":
    case "8":
    case "9":
        console.log ('ზაფხული')
        break;
    case "10":
    case "11":
    case "12":
        console.log ('შემოდგომა')
        break;
    default:
        console.log ('შედეგი არ არსებობს')
}

// დავალება 6
// მოცემულია მასივი let teams = [ ‘Barcelona’, ‘Liverpool’, ‘Real Madrid’, ‘Manchester City’, ‘Bayern’ ]
// აღნიშნული მასივიდან ამოიღეთ პირველი ელემენტი და დაამატეთ ბოლოში.

let teams = ['Barcelona', 'Liverpool', 'Real Madrid', 'Manchester City', 'Bayern'];
let firstTeam = teams.shift();
teams.push(firstTeam);

console.log(teams);

// დავალება 7
// let teams = [ ‘Barcelona’, ‘Liverpool’, ‘Real Madrid’, ‘Manchester City’, ‘Bayern’, ‘Arsenal’, 
// ‘Chelsea’, ‘Goris Dila’, ‘Mimino’, ‘Wnoris Milani’, ‘Saburtalo’ ]

// აღნიშნული მასივიდან მოძებნეთ მიმინოს ინდექსის ნომერი და შემდეგ შეამოწმეთ ეს ინდექსი ლუწია თუ კენტი. თუ ლუწი იქნება დააკონსოლეთ ეს ციფრი თვითონ და რომ ლუწია, კენტის შემთხვევაშიც დააკონსოლეთ ციფრი და რომ კენტია.

let teams7 = ['Barcelona','Liverpool', 'Real Madrid', 'Manchester City', 'Bayern', 'Arsenal', 
'Chelsea', 'Goris Dila', 'Mimino', 'Wnoris Milani', 'Saburtalo'];

let miminoIndex = teams7.indexOf('Mimino');

if (miminoIndex % 2 === 0) {
  console.log(miminoIndex, 'ლუწია');
} else {
  console.log(miminoIndex, 'კენტია');
}

// დავალება 8
// მოცემულია ობიექტი let myStudent = {
// 	name: ‘Student’,
// 	age: 27,
// 	hasScolarship: false,
// 	gpa: 2.7,
// 	salary: [3000]
// }

// შეამოწმეთ თუ სტუდენტს აქვს სტიპენდია:
// 1. თუ აქვს მაშინ მისი ხელფასის მასივში დაამატეთ თანხა ელემენტის სახით (რამდენიც გინდა)
// 2. თუ არ აქვს სტიპენდია მაშინ დამატებით შეამოწმეთ მისი GPA:
// 	2.1 თუ gpa მეტია 3-ზე, მაშინ მის სტიპენდიას შეუცვალეთ მნიშნელობა და გახადეთ true
// 	2.2 თუ gpa ნაკლებია 3-ზე მაშინ ნახეთ მისი ხელფასის მასივი და წაშალეთ ყველა ელემენტი.

 let myStudent = {
	name: 'Student',
	age: 27,
	hasScolarship: false,
	gpa: 2.7,
	salary: [3000]
}
if (myStudent.hasScolarship === true) {
    myStudent.salary = myStudent.salary.push(1000);
} else {
    if (myStudent.gpa > 3) {
        myStudent.hasScolarship = true;
    } else {
        myStudent.salary = [];
    }
}
console.log (myStudent);