jalaliDatepicker.startWatch({
    separatorChar: "/",
    minDate: "attr",
    maxDate: "attr",
    changeMonthRotateYear: true,
    showTodayBtn: true,
    showEmptyBtn: true
});
//flatpickr("[data-jdp]");
document.getElementById("aaa").addEventListener("jdp:change", function (e) { console.log(e) });