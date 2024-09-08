$(document).ready(function(){
    let studentCount = 0;
    $("#submit").click(function(event){
        event.preventDefault();
        studentCount ++;
        var student = $("#studentName").val().trim();
        var roll = $("#rollNumber").val().trim();
        var attendance = $("#attendance :selected").text();
        var date = $("#date").val().trim();
        var time = $("#time").val().trim();
        var S_class = $("#class").val().trim();
        var leave = $("#leave :selected").text();;
        if(student || roll || attendance || date || time || S_class || leave){
           var studentData = {
            S_name: student,
            roll: roll,
            attendance: attendance,
            date: date,
            time: time,
            St_class: S_class,
            leave: leave
           }
           $("#studentList").append(`
                <tr>
                <td>${studentCount}</td>
                <td>${studentData.roll}</td>
                <td>${studentData.S_name}</td>
                <td>${studentData.St_class}</td>
                <td>${studentData.time}</td>
                <td>${studentData.date}</td>
                <td>${studentData.attendance}</td>
                <td>${studentData.leave}</td>
                </tr>
            `);
            console.log(studentData.leave);
            var check = studentData.attendance;
            if(check !== "Absent"){
             $("td").eq(6).attr("id","t-present");
            }else{
             $("td").eq(6).attr("id","t-absent");
            }
            let p = $("tbody #t-present").length;
            let a = $("tbody #t-absent").length;
            console.log(p);
            $("#present").text(p);
            $("#absent").text(a);
            $("#totalStudent").text(studentCount);
           $("#studentForm")[0].reset();
           $("#card").addClass("d-none");
        }else{
            alert("Please fill all the fields");
        }
        return false;
    });
    $("#cut").click(function(){
        $("#card").addClass("d-none");
    });
$("#add-list").click(function(){
    if($("#card").hasClass("d-none")){
        $("#card").removeClass("d-none");
    }else{
        $("#card").addClass("d-none");
    }
return false;
});
$("#print").click(function(){
    $("#dataprint").printThis({
        base: "https://abdulsamad2522.github.io/abdulsamad-profile/",
        importCSS: true,   
        importStyle: true,    
        loadCSS: "style.css"
    })
});
})