let month = {
    April:"فروردین",
    May :"اردیبهشت",
    June:"خرداد",
    July:"تیر",
    August:"مرداد",
    September:"شهریور",
    October:"مهر",
    November:"آبان",
    November:"آذر",
    January:"دی",
    November:"بهمن",
    March:"اسفند",
    };
    let day = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    let year = 1400;

function openChooseData(){
    alert(new Date().toLocaleDateString('fa-IR',{ year: 'numeric', month: 'long', day: 'numeric',weekday: 'long'}))
}