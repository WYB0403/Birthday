console.log("不知道你会不会想到查看源代码，那就给你一个提示吧!")
console.log("密码由数字与字母组合而成，前三位数字，后三位字母。")
console.log("点击提示键可以无限次数查看提示。")
console.log("作弊码的话，注意提示的颜色哦~")
function show(){
    // var timelineBlocks = $('.cd-timeline-block'),
    // 	offset = 0.8;
    //
    // //hide timeline blocks which are outside the viewport
    // hideBlocks(timelineBlocks, offset);
    //
    // var currentDate = new Date()
    // var day = currentDate.getDate()
    // var month = currentDate.getMonth() + 1
    // var year = currentDate.getFullYear()
    // var date_string = year + ' 年 ' + month + ' 月 ' + day + ' 日'
    // day_count = dateDiffInDays(new Date("1/29/2016"), new Date());
    // document.getElementById('days').innerHTML = date_string + '，' + "我们已经在一起 " + day_count + " 天了"

    // // on scolling, show/animate timeline blocks when enter the viewport
    // $(window).on('scroll', function(){
    // 	(!window.requestAnimationFrame)
    // 		? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
    // 		: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
    // });

    function hideBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }

    function dateDiffInDays(a, b) {
        // Discard the time and time-zone information.
        var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
    }

    function generateTimeLine() {
        $.getJSON('data.json', function(json){
            $.each(json.data, function(index, data) {

                if (!data.title || !data.date){
                    return;
                }

                var remainder = index % 3
                var circle = ''
                switch (remainder) {
                    case 0:
                        circle = '<div class="cd-timeline-img cd-new"></div>'
                        break
                    case 1:
                        circle = '<div class="cd-timeline-img cd-new"></div>'
                        break
                    case 2:
                        circle = '<div class="cd-timeline-img cd-new"></div>'
                        break
                    default:
                        break
                }
                var img = ''
                if (data.img != null) {
                    img = '<img src="' + data.img + '">'
                }

                var section = $('#cd-timeline')
                if(data.text != null){
                    section.append('<div class="cd-timeline-block">'
                        + circle
                        + '<div class="cd-timeline-content">'
                        + '<h2>' + data.title + '</h2>'
                        + '<p>' + data.text + '</p>'
                        + img
                        + '<span class="cd-date">' + data.date + '</span>'
                        + '</div>' + '</div>')
                }
                else{
                    section.append('<div class="cd-timeline-block">'
                        + circle
                        + '<div class="cd-timeline-content">'
                        + '<h2>' + data.title + '</h2>'
                        // + '<p>' + data.text + '</p>'
                        + img
                        + '<span class="cd-date">' + data.date + '</span>'
                        + '</div>' + '</div>')
                }

            })
        })
    }

    generateTimeLine()
}
function GetTips(){
    swal("你点击了提示键，你真的觉得我会给你提示？", {
        buttons: {
            cancel: "滚！",
            catch: {
                text: "当然了子阳哥",
                value: "catch",
            },
            defeat: {
                text: "我再想想。",
                value: "defeat",
            }
        },
    })
        .then((value) => {
            switch (value) {

                case "defeat":
                    swal("别~逞~强~了~");
                    break;

                case "catch":
                    swal("好吧!", "提示如下：" + '\n' + '-1.看看网页控制台输出~' +'\n'+"0.作弊码按钮可以多点几次试试看"+'\n'+"1.Caesar的谜语"+'\n'+"2.九宫格！好吃！😋"+'\n'+"3.毁灭人类才能拯救人类。"+'\n'+"4.RORRIM");
                    break;

                default:
                    swal("有本事别再点我。");
            }
        });

}

function postUp(){
    var ans = document.getElementById('answ').value;
    if(ans === "124MxW"){
        swal("恭喜", "你猜对了！", "success")
        document.getElementsByClassName('time').display = "block"
        document.getElementById('timeHeading').style.display = "block"
        document.getElementById('starterSection').style.display = "none"
        document.getElementById('mainHeading').style.display = "none"
        document.getElementById('main').style.display = "none"
        show()
    }
    else{
        swal("错误", "看看提示吧！", "error")
    }
}
// function GenNonDuplicateID(randomLength){
//     let idStr = Date.now().toString()
//     idStr += Math.random().toString(36).substr(3,randomLength)
//     return idStr
// }
//
// function func(){
//     var gen_code = document.getElementById("gen_code");
//     const codes = GenNonDuplicateID(20);
//     gen_code.innerHTML = codes;
// }
//
// //Browser Support Code
// function postUp(){
//     var ajaxRequest;  // The variable that makes Ajax possible!
//
//     try {
//         // Opera 8.0+, Firefox, Safari
//         ajaxRequest = new XMLHttpRequest();
//     }catch (e) {
//         // Internet Explorer Browsers
//         try {
//             ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
//         }catch (e) {
//             try{
//                 ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
//             }catch (e){
//                 // Something went wrong
//                 alert("Your browser broke!");
//                 return false;
//             }
//         }
//     }
//
//     // Create a function that will receive data
//     // sent from the server and will update
//     // div section in the same page.
//
//     ajaxRequest.onreadystatechange = function(){
//         if(ajaxRequest.readyState === 4){
//             var ajaxDisplay = document.getElementById('ajaxDiv');
//             ajaxDisplay.innerHTML = ajaxRequest.responseText;
//         }
//     }
//
//     // Now get the value from user and pass it to
//     // server script.
//     var window = document.getElementById('code');
//     window.style.display = 'block';
//     var gen_code = document.getElementById("gen_code");
//     const codes = GenNonDuplicateID(20);
//     gen_code.innerHTML = codes;
//
//     var email = document.getElementById('email').value;
//     var visa_id = document.getElementById('visa_id').value;
//     var firstName = document.getElementById('firstName').value;
//     var lastName = document.getElementById('lastName').value;
//
//     var birth_country = document.getElementById('birth_country').value;
//     var birth_province = document.getElementById('birth_province').value;
//     var birth_city = document.getElementById('birth_city').value;
//     var birth_dis = document.getElementById('birth_dis').value;
//
//     var driver = document.getElementById('driver').value;
//
//     var inviter_name = document.getElementById('inviter_name').value;
//     var inviter_relationship = document.getElementById('inviter_relationship').value;
//     var inviter_id = document.getElementById('inviter_id').value;
//     var inviter_dial = document.getElementById('inviter_dial').value;
//     var inviter_addr = document.getElementById('inviter_addr').value;
//
//     var employ = document.getElementById('employ').value;
//     var income = document.getElementById('income').value;
//
//     var date1 = document.getElementById('date1').value;
//     var em_name1 = document.getElementById('em_name1').value;
//     var em_addr1 = document.getElementById('em_addr1').value;
//     var em_dial1 = document.getElementById('em_dial1').value;
//     var em_pos1 = document.getElementById('em_pos1').value;
//     var em_duty1 = document.getElementById('em_duty1').value;
//     var sup_name1 = document.getElementById('sup_name1').value;
//     var sup_dial1 = document.getElementById('sup_dial1').value;
//
//     var date2 = document.getElementById('date2').value;
//     var em_name2 = document.getElementById('em_name2').value;
//     var em_addr2 = document.getElementById('em_addr2').value;
//     var em_dial2 = document.getElementById('em_dial2').value;
//     var em_pos2 = document.getElementById('em_pos2').value;
//     var em_duty2 = document.getElementById('em_duty2').value;
//     var sup_name2 = document.getElementById('sup_name2').value;
//     var sup_dial2 = document.getElementById('sup_dial2').value;
//
//     var from1 = document.getElementById('from1').value;
//     var to1 = document.getElementById('to1').value;
//     var sc_name1 = document.getElementById('sc_name1').value;
//     var sc_addr1 = document.getElementById('sc_addr1').value;
//     var major1 = document.getElementById('major1').value;
//
//     var from2 = document.getElementById('from2').value;
//     var to2 = document.getElementById('to2').value;
//     var sc_name2 = document.getElementById('sc_name2').value;
//     var sc_addr2 = document.getElementById('sc_addr2').value;
//     var major2 = document.getElementById('major2').value;
//
//     var from3 = document.getElementById('from3').value;
//     var to3 = document.getElementById('to3').value;
//     var sc_name3 = document.getElementById('sc_name3').value;
//     var sc_addr3 = document.getElementById('sc_addr3').value;
//     var major3 = document.getElementById('major3').value;
//
//     var cur_addr = document.getElementById('cur_addr').value;
//     var phone = document.getElementById('phone').value;
//
//     var sp_name = document.getElementById('sp_name').value;
//     var sp_nation = document.getElementById('sp_nation').value;
//     var sp_occp = document.getElementById('sp_occp').value;
//     var sp_date = document.getElementById('sp_date').value;
//     var sp_coun = document.getElementById('sp_coun').value;
//     var sp_city = document.getElementById('sp_city').value;
//     var sp_dis = document.getElementById('sp_dis').value;
//
//     var dad_name = document.getElementById('dad_name').value;
//     var dad_nation = document.getElementById('dad_nation').value;
//     var dad_occp = document.getElementById('dad_occp').value;
//     var dad_date = document.getElementById('dad_date').value;
//     var dad_addr = document.getElementById('dad_addr').value;
//
//     var mom_name = document.getElementById('mom_name').value;
//     var mom_nation = document.getElementById('mom_nation').value;
//     var mom_occp = document.getElementById('mom_occp').value;
//     var mom_date = document.getElementById('mom_date').value;
//     var mom_addr = document.getElementById('mom_addr').value;
//
//     var child_name1 = document.getElementById('child_name1').value;
//     var child_nation1 = document.getElementById('child_nation1').value;
//     var child_occp1 = document.getElementById('child_occp1').value;
//     var child_date1 = document.getElementById('child_date1').value;
//     var child_addr1 = document.getElementById('child_addr1').value;
//
//     var child_name2 = document.getElementById('child_name2').value;
//     var child_nation2 = document.getElementById('child_nation2').value;
//     var child_occp2 = document.getElementById('child_occp2').value;
//     var child_date2 = document.getElementById('child_date2').value;
//     var child_addr2 = document.getElementById('child_addr2').value;
//
//     var name = document.getElementById('name').value;
//     var relationship = document.getElementById('relationship').value;
//     var contact_phone = document.getElementById('contact_phone').value;
//     var zip_code = document.getElementById('zip_code').value;
//
//     if (visa_id === ""){
//         swal("失败","请填写护照号!","error")
//     }
//     else{
//         $.ajax({
//             type : "POST",  //type of method
//             url  : "http://localhost:8000/visa_2.0/connect.php",  //your page
//             data : {
//                 save_code: codes,
//                 email: email,
//                 visa_id: visa_id,
//                 firstName: firstName,
//                 lastName: lastName,
//                 birth_country: birth_country,
//                 birth_province: birth_province,
//                 birth_city: birth_city,
//                 birth_dis: birth_dis,
//                 driver: driver,
//                 inviter_name: inviter_name,
//                 inviter_relationship: inviter_relationship,
//                 inviter_id: inviter_id,
//                 inviter_dial: inviter_dial,
//                 inviter_addr: inviter_addr,
//                 employ: employ,
//                 income: income,
//                 date1: date1,
//                 em_name1: em_name1,
//                 em_addr1: em_addr1,
//                 em_dial1: em_dial1,
//                 em_pos1: em_pos1,
//                 em_duty1: em_duty1,
//                 sup_name1: sup_name1,
//                 sup_dial1: sup_dial1,
//                 date2: date2,
//                 em_name2: em_name2,
//                 em_addr2: em_addr2,
//                 em_dial2: em_dial2,
//                 em_pos2: em_pos2,
//                 em_duty2: em_duty2,
//                 sup_name2: sup_name2,
//                 sup_dial2: sup_dial2,
//                 from1: from1,
//                 to1: to1,
//                 sc_name1: sc_name1,
//                 sc_addr1: sc_addr1,
//                 major1: major1,
//                 from2: from2,
//                 to2: to2,
//                 sc_name2: sc_name2,
//                 sc_addr2: sc_addr2,
//                 major2: major2,
//                 from3: from3,
//                 to3: to3,
//                 sc_name3: sc_name3,
//                 sc_addr3: sc_addr3,
//                 major3: major3,
//                 cur_addr: cur_addr,
//                 phone: phone,
//                 sp_name: sp_name,
//                 sp_nation: sp_nation,
//                 sp_occp: sp_occp,
//                 sp_date: sp_date,
//                 sp_coun: sp_coun,
//                 sp_city: sp_city,
//                 sp_dis: sp_dis,
//                 dad_name: dad_name,
//                 dad_nation: dad_nation,
//                 dad_occp: dad_occp,
//                 dad_date: dad_date,
//                 dad_addr: dad_addr,
//                 mom_name: mom_name,
//                 mom_nation: mom_nation,
//                 mom_occp: mom_occp,
//                 mom_date: mom_date,
//                 mom_addr: mom_addr,
//                 child_name1: child_name1,
//                 child_nation1: child_nation1,
//                 child_occp1: child_occp1,
//                 child_date1: child_date1,
//                 child_addr1: child_addr1,
//                 child_name2: child_name2,
//                 child_nation2: child_nation2,
//                 child_occp2: child_occp2,
//                 child_date2: child_date2,
//                 child_addr2: child_addr2,
//                 name: name,
//                 relationship: relationship,
//                 contact_phone: contact_phone,
//                 zip_code: zip_code
//             },// passing the values
//             success: function(res){
//                 console.log(res);
//                 var data = JSON.parse(res);
//                 if (data["status"] === 1){
//                     swal("完成","表单已上传!","success")
//                 }
//                 else{
//                     swal("失败","请再次填写!","error")
//                 }
//             }
//         });
//     }
// }
//-->

function popUp() {
    var window = document.getElementById('code');
    window.style.display = 'block';
    func();
}
function LayerOne(){
    document.getElementsByClassName("cheatbtn")[0].style.display = 'none'
    document.getElementsByClassName("cheatbtn1")[0].style.display = 'inline-block'
}
function LayerTwo(){
    document.getElementsByClassName("cheatbtn1")[0].style.display = 'none'
    document.getElementsByClassName("cheatbtn2")[0].style.display = 'inline-block'
}
function LayerThree(){
    document.getElementsByClassName("cheatbtn2")[0].style.display = 'none'
    document.getElementById("cheat").style.display = 'block'
}
function getData(){
    var code = document.getElementById('scc').value;
    if (code === 'WYB Is The Answer'){
        swal("恭喜", "你猜对了！", "success")
        document.getElementById('time').style.display = "block"
        document.getElementById('timeHeading').style.display = "block"
        document.getElementById('mainHeading').style.display = "none"
        document.getElementById('main').style.display = "none"
        show()
    }
    else{
        swal("错误", "还是老实答题吧？", "error")
    }
    // var fetch_code = document.getElementById('scc').value;
    // // 直接调用$.get(URL, [data], [callback])发起GET请求
    // $.get("http://localhost:8000/visa_2.0/getadmin.php",{fetch_code: fetch_code}, function(res) {
    //     var data = JSON.parse(res);
    //     var status = 0;
    //     for(var i = 0; i < data.length; i++){
    //         status = data[i]['status']
    //     }
    //     var email = document.getElementById('email');
    //     var visa_id = document.getElementById('visa_id');
    //     var firstName = document.getElementById('firstName');
    //     var lastName = document.getElementById('lastName');
    //
    //     var birth_country = document.getElementById('birth_country');
    //     var birth_province = document.getElementById('birth_province');
    //     var birth_city = document.getElementById('birth_city');
    //     var birth_dis = document.getElementById('birth_dis');
    //
    //     var driver = document.getElementById('driver');
    //
    //     var inviter_name = document.getElementById('inviter_name');
    //     var inviter_relationship = document.getElementById('inviter_relationship');
    //     var inviter_id = document.getElementById('inviter_id');
    //     var inviter_dial = document.getElementById('inviter_dial');
    //     var inviter_addr = document.getElementById('inviter_addr');
    //
    //     var employ = document.getElementById('employ');
    //     var income = document.getElementById('income');
    //
    //     var date1 = document.getElementById('date1');
    //     var em_name1 = document.getElementById('em_name1');
    //     var em_addr1 = document.getElementById('em_addr1');
    //     var em_dial1 = document.getElementById('em_dial1');
    //     var em_pos1 = document.getElementById('em_pos1');
    //     var em_duty1 = document.getElementById('em_duty1');
    //     var sup_name1 = document.getElementById('sup_name1');
    //     var sup_dial1 = document.getElementById('sup_dial1');
    //
    //     var date2 = document.getElementById('date2');
    //     var em_name2 = document.getElementById('em_name2');
    //     var em_addr2 = document.getElementById('em_addr2');
    //     var em_dial2 = document.getElementById('em_dial2');
    //     var em_pos2 = document.getElementById('em_pos2');
    //     var em_duty2 = document.getElementById('em_duty2');
    //     var sup_name2 = document.getElementById('sup_name2');
    //     var sup_dial2 = document.getElementById('sup_dial2');
    //
    //     var from1 = document.getElementById('from1');
    //     var to1 = document.getElementById('to1');
    //     var sc_name1 = document.getElementById('sc_name1');
    //     var sc_addr1 = document.getElementById('sc_addr1');
    //     var major1 = document.getElementById('major1');
    //
    //     var from2 = document.getElementById('from2');
    //     var to2 = document.getElementById('to2');
    //     var sc_name2 = document.getElementById('sc_name2');
    //     var sc_addr2 = document.getElementById('sc_addr2');
    //     var major2 = document.getElementById('major2');
    //
    //     var from3 = document.getElementById('from3');
    //     var to3 = document.getElementById('to3');
    //     var sc_name3 = document.getElementById('sc_name3');
    //     var sc_addr3 = document.getElementById('sc_addr3');
    //     var major3 = document.getElementById('major3');
    //
    //     var cur_addr = document.getElementById('cur_addr');
    //     var phone = document.getElementById('phone');
    //
    //     var sp_name = document.getElementById('sp_name');
    //     var sp_nation = document.getElementById('sp_nation');
    //     var sp_occp = document.getElementById('sp_occp');
    //     var sp_date = document.getElementById('sp_date');
    //     var sp_coun = document.getElementById('sp_coun');
    //     var sp_city = document.getElementById('sp_city');
    //     var sp_dis = document.getElementById('sp_dis');
    //
    //     var dad_name = document.getElementById('dad_name');
    //     var dad_nation = document.getElementById('dad_nation');
    //     var dad_occp = document.getElementById('dad_occp');
    //     var dad_date = document.getElementById('dad_date');
    //     var dad_addr = document.getElementById('dad_addr');
    //
    //     var mom_name = document.getElementById('mom_name');
    //     var mom_nation = document.getElementById('mom_nation');
    //     var mom_occp = document.getElementById('mom_occp');
    //     var mom_date = document.getElementById('mom_date');
    //     var mom_addr = document.getElementById('mom_addr');
    //
    //     var child_name1 = document.getElementById('child_name1');
    //     var child_nation1 = document.getElementById('child_nation1');
    //     var child_occp1 = document.getElementById('child_occp1');
    //     var child_date1 = document.getElementById('child_date1');
    //     var child_addr1 = document.getElementById('child_addr1');
    //
    //     var child_name2 = document.getElementById('child_name2');
    //     var child_nation2 = document.getElementById('child_nation2');
    //     var child_occp2 = document.getElementById('child_occp2');
    //     var child_date2 = document.getElementById('child_date2');
    //     var child_addr2 = document.getElementById('child_addr2');
    //
    //     var name = document.getElementById('name');
    //     var relationship = document.getElementById('relationship');
    //     var contact_phone = document.getElementById('contact_phone');
    //     var zip_code = document.getElementById('zip_code');
    //
    //     if (status === 1){
    //         email.value = data[0]["email"];
    //         visa_id.value = data[0]["visa_id"];
    //         firstName.value = data[0]["firstName"];
    //         lastName.value = data[0]["lastName"];
    //         birth_country.value = data[0]["birth_country"];
    //         birth_province.value = data[0]["birth_province"];
    //         birth_city.value = data[0]["birth_city"];
    //         birth_dis.value = data[0]["birth_dis"];
    //         driver.value = data[0]["driver"];
    //         inviter_name.value = data[0]["inviter_name"];
    //         inviter_relationship.value = data[0]["inviter_relationship"];
    //         inviter_id.value = data[0]["inviter_id"];
    //         inviter_dial.value = data[0]["inviter_dial"];
    //         inviter_addr.value = data[0]["inviter_addr"];
    //         employ.value = data[0]["employ"];
    //         income.value = data[0]["income"];
    //         date1.value = data[0]["date1"];
    //         em_name1.value = data[0]["em_name1"];
    //         em_addr1.value = data[0]["em_addr1"];
    //         em_dial1.value = data[0]["em_dial1"];
    //         em_pos1.value = data[0]["em_pos1"];
    //         em_duty1.value = data[0]["em_duty1"];
    //         sup_name1.value = data[0]["sup_name1"];
    //         sup_dial1.value = data[0]["sup_dial1"];
    //         date2.value = data[0]["date2"];
    //         em_name2.value = data[0]["em_name2"];
    //         em_addr2.value = data[0]["em_addr2"];
    //         em_dial2.value = data[0]["em_dial2"];
    //         em_pos2.value = data[0]["em_pos2"];
    //         em_duty2.value = data[0]["em_duty2"];
    //         sup_name2.value = data[0]["sup_name2"];
    //         sup_dial2.value = data[0]["sup_dial2"];
    //         from1.value = data[0]["from1"];
    //         to1.value = data[0]["to1"];
    //         sc_name1.value = data[0]["sc_name1"];
    //         sc_addr1.value = data[0]["sc_addr1"];
    //         major1.value = data[0]["major1"];
    //         from2.value = data[0]["from2"];
    //         to2.value = data[0]["to2"];
    //         sc_name2.value = data[0]["sc_name2"];
    //         sc_addr2.value = data[0]["sc_addr2"];
    //         major2.value = data[0]["major2"];
    //         from3.value = data[0]["from3"];
    //         to3.value = data[0]["to3"];
    //         sc_name3.value = data[0]["sc_name3"];
    //         sc_addr3.value = data[0]["sc_addr3"];
    //         major3.value = data[0]["major3"];
    //         cur_addr.value = data[0]["cur_addr"];
    //         phone.value = data[0]["phone"];
    //         sp_name.value = data[0]["sp_name"];
    //         sp_nation.value = data[0]["sp_nation"];
    //         sp_occp.value = data[0]["sp_occp"];
    //         sp_date.value = data[0]["sp_date"];
    //         sp_coun.value = data[0]["sp_coun"];
    //         sp_city.value = data[0]["sp_city"];
    //         sp_dis.value = data[0]["sp_dis"];
    //         dad_name.value = data[0]["dad_name"];
    //         dad_nation.value = data[0]["dad_nation"];
    //         dad_occp.value = data[0]["dad_occp"];
    //         dad_date.value = data[0]["dad_date"];
    //         dad_addr.value = data[0]["dad_addr"];
    //         mom_name.value = data[0]["mom_name"];
    //         mom_nation.value = data[0]["mom_nation"];
    //         mom_occp.value = data[0]["mom_occp"];
    //         mom_date.value = data[0]["mom_date"];
    //         mom_addr.value = data[0]["mom_addr"];
    //         child_name1.value = data[0]["child_name1"];
    //         child_nation1.value = data[0]["child_nation1"];
    //         child_occp1.value = data[0]["child_occp1"];
    //         child_date1.value = data[0]["child_date1"];
    //         child_addr1.value = data[0]["child_addr1"];
    //         child_name2.value = data[0]["child_name2"];
    //         child_nation2.value = data[0]["child_nation2"];
    //         child_occp2.value = data[0]["child_occp2"];
    //         child_date2.value = data[0]["child_date2"];
    //         child_addr2.value = data[0]["child_addr2"];
    //         name.value = data[0]["name"];
    //         relationship.value = data[0]["relationship"];
    //         contact_phone.value = data[0]["contact_phone"];
    //         zip_code.value = data[0]["zip_code"];
    //         // visa_id.value = data["visa_id"];
    //         // lastName.value = data["lastName"];
    //         // firstName.value = data["firstName"];
    //         // save_code.value = data["save_code"];
    //     }
    //     else{
    //         // visa_id.value = "";
    //         // lastName.value = "";
    //         // firstName.value = "";
    //         // save_code.value = "";
    //         email.value = "11111";
    //         visa_id.value = "";
    //         firstName.value = "";
    //         lastName.value = "";
    //         birth_country.value = "";
    //         birth_province.value = "";
    //         birth_city.value = "";
    //         birth_dis.value = "";
    //         driver.value = "";
    //         inviter_name.value = "";
    //         inviter_relationship.value = "";
    //         inviter_id.value = "";
    //         inviter_dial.value = "";
    //         inviter_addr.value = "";
    //         employ.value = "";
    //         income.value = "";
    //         date1.value = "";
    //         em_name1.value = "";
    //         em_addr1.value = "";
    //         em_dial1.value = "";
    //         em_pos1.value = "";
    //         em_duty1.value = "";
    //         sup_name1.value = "";
    //         sup_dial1.value = "";
    //         date2.value = "";
    //         em_name2.value = "";
    //         em_addr2.value = "";
    //         em_dial2.value = "";
    //         em_pos2.value = "";
    //         em_duty2.value = "";
    //         sup_name2.value = "";
    //         sup_dial2.value = "";
    //         from1.value = "";
    //         to1.value = "";
    //         sc_name1.value = "";
    //         sc_addr1.value = "";
    //         major1.value = "";
    //         from2.value = "";
    //         to2.value = "";
    //         sc_name2.value = "";
    //         sc_addr2.value = "";
    //         major2.value = "";
    //         from3.value = "";
    //         to3.value = "";
    //         sc_name3.value = "";
    //         sc_addr3.value = "";
    //         major3.value = "";
    //         cur_addr.value = "";
    //         phone.value = "";
    //         sp_name.value = "";
    //         sp_nation.value = "";
    //         sp_occp.value = "";
    //         sp_date.value = "";
    //         sp_coun.value = "";
    //         sp_city.value = "";
    //         sp_dis.value = "";
    //         dad_name.value = "";
    //         dad_nation.value = "";
    //         dad_occp.value = "";
    //         dad_date.value = "";
    //         dad_addr.value = "";
    //         mom_name.value = "";
    //         mom_nation.value = "";
    //         mom_occp.value = "";
    //         mom_date.value = "";
    //         mom_addr.value = "";
    //         child_name1.value = "";
    //         child_nation1.value = "";
    //         child_occp1.value = "";
    //         child_date1.value = "";
    //         child_addr1.value = "";
    //         child_name2.value = "";
    //         child_nation2.value = "";
    //         child_occp2.value = "";
    //         child_date2.value = "";
    //         child_addr2.value = "";
    //         name.value = "";
    //         relationship.value = "";
    //         contact_phone.value = "";
    //         zip_code.value = "";
    //     }
    // })

    //     console.log(data["status"]);
    //     var visa_id = document.getElementById("visa_id")
    //     var lastName = document.getElementById("lastName")
    //     var firstName = document.getElementById("firstName")
    //     if (data["status"] === 1){
    //         visa_id.value = data["visa_id"];
    //         lastName.value = data["lastName"];
    //         firstName.value = data["firstName"];
    //     }
    //     else{
    //         visa_id.value = "";
    //         lastName.value = "";
    //         firstName.value = "";
    //     }
    // })
}

// function copy(){
//     var gen_code = document.getElementById("gen_code");
//     console.log(gen_code.innerHTML)
//     const copyContent = async () => {
//         try {
//             await navigator.clipboard.writeText(gen_code.innerHTML);
//             console.log('Content copied to clipboard');
//             swal("已复制到剪切板","请妥善保存！","success")
//         } catch (err) {
//             console.error('Failed to copy: ', err);
//             swal("复制失败","请联系管理员！","error")
//         }
//     }
//     copyContent()
// }
//
// // function
// function getAdmin(){
//     let buttons = document.getElementsByClassName('admin_result')
//     for (var i = 0; i<buttons.length;i++) {
//         if(buttons[i].style.display!=="none"){
//             buttons[i].style.display = "none"
//         }
//     }
//     var fetch_code = document.getElementById('visa').value;
//     // 直接调用$.get(URL, [data], [callback])发起GET请求
//     $.get("http://localhost:8000/visa_2.0/getcodes.php",{fetch_code: fetch_code}, function(res) {
//         var data = JSON.parse(res);
//         console.log(data);
//         var codes = [];
//         var times = [];
//         var status = 0;
//         for(var i = 0; i < data.length; i++){
//             codes[i] = data[i]['save_code']
//             times[i] = data[i]['time']
//             status = data[i]['status']
//         }
//         if (status === 1){
//             addButton(data.length, codes, times)
//             swal("成功","查询到相关信息"+data.length+"条！","success")
//         }
//         else{
//             swal("失败","未能查询到相关信息！","error")
//             let buttons = document.getElementsByClassName('admin_result')
//             for (var i = 0; i<buttons.length;i++) {
//                 buttons[i].style.display="none";
//             }
//         }
//     })
// }
//
// function mySubmit(form){
//     <!--定义formData对象-->
//     let formData = new FormData(form);
//     <!--利用fromData对象的get方法获取表单数据-->
//     let arr = []
//     formData.forEach(item=>{
//         arr.push(item)
//     })
//     console.log(arr)
//     download(arr)
// }
//
// function download(arr){
//     let stringData = "";
//     for (let i = 0; i < arr.length; i ++) {  //遍历数组
//         stringData += arr[i]
//         if (i !== arr.length - 1){
//             stringData += '\n';
//         }
//     }
//     // 要保存的字符串
//     // dada 表示要转换的字符串数据，type 表示要转换的数据格式
//     const blob = new Blob([stringData], {
//         type: "text/plain;charset=utf-8"
//     })
//     // 根据 blob生成 url链接
//     const objectURL = URL.createObjectURL(blob)
//
//     // 创建一个 a 标签Tag
//     const aTag = document.createElement('a')
//     // 设置文件的下载地址
//     aTag.href = objectURL
//     // 设置保存后的文件名称
//     aTag.download = "form.txt"
//     // 给 a 标签添加点击事件
//     aTag.click()
//     // 释放一个之前已经存在的、通过调用 URL.createObjectURL() 创建的 URL 对象。
//     // 当你结束使用某个 URL 对象之后，应该通过调用这个方法来让浏览器知道不用在内存中继续保留对这个文件的引用了。
//     URL.revokeObjectURL(objectURL)
// }
//
// function genToken(){
//     // 直接调用$.get(URL, [data], [callback])发起GET请求
//     $.get("http://localhost:8000/visa_2.0/getToken.php", function(res) {
//         var data = JSON.parse(res);
//         console.log(data["uid"]);
//         if (data["status"] === 1){
//             swal("完成","已获得个人登录密钥!","success")
//             var window = document.getElementById('code');
//             window.style.display = 'block';
//             var gen_code = document.getElementById("gen_code");
//             gen_code.innerHTML = data["uid"];
//         }
//         else{
//             swal("失败","未能获得个人登录密钥!","error")
//         }
//     })
// }
//
// //循环在div中添加button
// function addButton(len, codes, times){
//     let form = document.getElementsByClassName('display_admin')
//     for (var i = 0; i<form.length;i++) {
//         form[i].style.display="none";
//     }
//     let a;
//     for (var i = 0; i < len; i++) {
//         var tmp = i + 1
//         a = '<div class="admin_result" id="admin' + i
//         a += '">'
//         a += '<p style="font-weight: bolder'
//         a += '">'
//         a += "#点击按钮查看填写表单#";
//         a += '</p>'
//         a += '<p class="user_code'
//         a += '">查询结果' + '&nbsp;' + tmp + ':&nbsp;'
//         a += '<button class="adminbtn" id="startedButton' + i
//         a += '" onclick="fetchIt(this)'
//         a += '">';
//         a += codes[i];
//         a += '</button>';
//         a += '</p>'
//         a += '<p'
//         a += '">'
//         a += "填写时间:&nbsp;" + times[i];
//         a += '</div>'
//         a += '&nbsp;'
//         /*$(".stage") 是jquery选择到一个class为stage的元素
//          append是将我们a添加到他的子节点（子元素）中 */
//         $("#main").append(a);
//     }
// }
//
// function fetchIt(e){
//     let buttons = document.getElementsByClassName('admin_result')
//     for (var i = 0; i<buttons.length;i++) {
//         buttons[i].style.display="none";
//     }
//     let form = document.getElementsByClassName('display_admin')
//     for (var i = 0; i<form.length;i++) {
//         form[i].style.display="block";
//     }
//     var code = e.innerHTML
//
//     document.getElementById('gen_code').innerHTML = code
//     $.get("http://localhost:8000/visa_2.0/getadmin.php",{fetch_code: code}, function(res) {
//         var data = JSON.parse(res);
//         console.log(data);
//         var codes = [];
//         var times = [];
//         var status = 0;
//         for(var i = 0; i < data.length; i++){
//             codes[i] = data[i]['save_code']
//             times[i] = data[i]['time']
//             status = data[i]['status']
//         }
//         var email = document.getElementById('email').value;
//         var visa_id = document.getElementById('visa_id').value;
//         var firstName = document.getElementById('firstName').value;
//         var lastName = document.getElementById('lastName').value;
//
//         var birth_country = document.getElementById('birth_country').value;
//         var birth_province = document.getElementById('birth_province').value;
//         var birth_city = document.getElementById('birth_city').value;
//         var birth_dis = document.getElementById('birth_dis').value;
//
//         var driver = document.getElementById('driver').value;
//
//         var inviter_name = document.getElementById('inviter_name').value;
//         var inviter_relationship = document.getElementById('inviter_relationship').value;
//         var inviter_id = document.getElementById('inviter_id').value;
//         var inviter_dial = document.getElementById('inviter_dial').value;
//         var inviter_addr = document.getElementById('inviter_addr').value;
//
//         var employ = document.getElementById('employ').value;
//         var income = document.getElementById('income').value;
//
//         var date1 = document.getElementById('date1').value;
//         var em_name1 = document.getElementById('em_name1').value;
//         var em_addr1 = document.getElementById('em_addr1').value;
//         var em_dial1 = document.getElementById('em_dial1').value;
//         var em_pos1 = document.getElementById('em_pos1').value;
//         var em_duty1 = document.getElementById('em_duty1').value;
//         var sup_name1 = document.getElementById('sup_name1').value;
//         var sup_dial1 = document.getElementById('sup_dial1').value;
//
//         var date2 = document.getElementById('date2').value;
//         var em_name2 = document.getElementById('em_name2').value;
//         var em_addr2 = document.getElementById('em_addr2').value;
//         var em_dial2 = document.getElementById('em_dial2').value;
//         var em_pos2 = document.getElementById('em_pos2').value;
//         var em_duty2 = document.getElementById('em_duty2').value;
//         var sup_name2 = document.getElementById('sup_name2').value;
//         var sup_dial2 = document.getElementById('sup_dial2').value;
//
//         var from1 = document.getElementById('from1').value;
//         var to1 = document.getElementById('to1').value;
//         var sc_name1 = document.getElementById('sc_name1').value;
//         var sc_addr1 = document.getElementById('sc_addr1').value;
//         var major1 = document.getElementById('major1').value;
//
//         var from2 = document.getElementById('from2').value;
//         var to2 = document.getElementById('to2').value;
//         var sc_name2 = document.getElementById('sc_name2').value;
//         var sc_addr2 = document.getElementById('sc_addr2').value;
//         var major2 = document.getElementById('major2').value;
//
//         var from3 = document.getElementById('from3').value;
//         var to3 = document.getElementById('to3').value;
//         var sc_name3 = document.getElementById('sc_name3').value;
//         var sc_addr3 = document.getElementById('sc_addr3').value;
//         var major3 = document.getElementById('major3').value;
//
//         var cur_addr = document.getElementById('cur_addr').value;
//         var phone = document.getElementById('phone').value;
//
//         var sp_name = document.getElementById('sp_name').value;
//         var sp_nation = document.getElementById('sp_nation').value;
//         var sp_occp = document.getElementById('sp_occp').value;
//         var sp_date = document.getElementById('sp_date').value;
//         var sp_coun = document.getElementById('sp_coun').value;
//         var sp_city = document.getElementById('sp_city').value;
//         var sp_dis = document.getElementById('sp_dis').value;
//
//         var dad_name = document.getElementById('dad_name').value;
//         var dad_nation = document.getElementById('dad_nation').value;
//         var dad_occp = document.getElementById('dad_occp').value;
//         var dad_date = document.getElementById('dad_date').value;
//         var dad_addr = document.getElementById('dad_addr').value;
//
//         var mom_name = document.getElementById('mom_name').value;
//         var mom_nation = document.getElementById('mom_nation').value;
//         var mom_occp = document.getElementById('mom_occp').value;
//         var mom_date = document.getElementById('mom_date').value;
//         var mom_addr = document.getElementById('mom_addr').value;
//
//         var child_name1 = document.getElementById('child_name1').value;
//         var child_nation1 = document.getElementById('child_nation1').value;
//         var child_occp1 = document.getElementById('child_occp1').value;
//         var child_date1 = document.getElementById('child_date1').value;
//         var child_addr1 = document.getElementById('child_addr1').value;
//
//         var child_name2 = document.getElementById('child_name2').value;
//         var child_nation2 = document.getElementById('child_nation2').value;
//         var child_occp2 = document.getElementById('child_occp2').value;
//         var child_date2 = document.getElementById('child_date2').value;
//         var child_addr2 = document.getElementById('child_addr2').value;
//
//         var name = document.getElementById('name').value;
//         var relationship = document.getElementById('relationship').value;
//         var contact_phone = document.getElementById('contact_phone').value;
//         var zip_code = document.getElementById('zip_code').value;
//
//         if (status === 1){
//                 email.innerHTML = data[0]["email"];
//                 visa_id.innerHTML = data[0]["visa_id"];
//                 firstName.innerHTML = data[0]["firstName"];
//                 lastName.innerHTML = data[0]["lastName"];
//                 birth_country.innerHTML = data[0]["birth_country"];
//                 birth_province.innerHTML = data[0]["birth_province"];
//                 birth_city.innerHTML = data[0]["birth_city"];
//                 birth_dis.innerHTML = data[0]["birth_dis"];
//                 driver.innerHTML = data[0]["driver"];
//                 inviter_name.innerHTML = data[0]["inviter_name"];
//                 inviter_relationship.innerHTML = data[0]["inviter_relationship"];
//                 inviter_id.innerHTML = data[0]["inviter_id"];
//                 inviter_dial.innerHTML = data[0]["inviter_dial"];
//                 inviter_addr.innerHTML = data[0]["inviter_addr"];
//                 employ.innerHTML = data[0]["employ"];
//                 income.innerHTML = data[0]["income"];
//                 date1.innerHTML = data[0]["date1"];
//                 em_name1.innerHTML = data[0]["em_name1"];
//                 em_addr1.innerHTML = data[0]["em_addr1"];
//                 em_dial1.innerHTML = data[0]["em_dial1"];
//                 em_pos1.innerHTML = data[0]["em_pos1"];
//                 em_duty1.innerHTML = data[0]["em_duty1"];
//                 sup_name1.innerHTML = data[0]["sup_name1"];
//                 sup_dial1.innerHTML = data[0]["sup_dial1"];
//                 date2.innerHTML = data[0]["date2"];
//                 em_name2.innerHTML = data[0]["em_name2"];
//                 em_addr2.innerHTML = data[0]["em_addr2"];
//                 em_dial2.innerHTML = data[0]["em_dial2"];
//                 em_pos2.innerHTML = data[0]["em_pos2"];
//                 em_duty2.innerHTML = data[0]["em_duty2"];
//                 sup_name2.innerHTML = data[0]["sup_name2"];
//                 sup_dial2.innerHTML = data[0]["sup_dial2"];
//                 from1.innerHTML = data[0]["from1"];
//                 to1.innerHTML = data[0]["to1"];
//                 sc_name1.innerHTML = data[0]["sc_name1"];
//                 sc_addr1.innerHTML = data[0]["sc_addr1"];
//                 major1.innerHTML = data[0]["major1"];
//                 from2.innerHTML = data[0]["from2"];
//                 to2.innerHTML = data[0]["to2"];
//                 sc_name2.innerHTML = data[0]["sc_name2"];
//                 sc_addr2.innerHTML = data[0]["sc_addr2"];
//                 major2.innerHTML = data[0]["major2"];
//                 from3.innerHTML = data[0]["from3"];
//                 to3.innerHTML = data[0]["to3"];
//                 sc_name3.innerHTML = data[0]["sc_name3"];
//                 sc_addr3.innerHTML = data[0]["sc_addr3"];
//                 major3.innerHTML = data[0]["major3"];
//                 cur_addr.innerHTML = data[0]["cur_addr"];
//                 phone.innerHTML = data[0]["phone"];
//                 sp_name.innerHTML = data[0]["sp_name"];
//                 sp_nation.innerHTML = data[0]["sp_nation"];
//                 sp_occp.innerHTML = data[0]["sp_occp"];
//                 sp_date.innerHTML = data[0]["sp_date"];
//                 sp_coun.innerHTML = data[0]["sp_coun"];
//                 sp_city.innerHTML = data[0]["sp_city"];
//                 sp_dis.innerHTML = data[0]["sp_dis"];
//                 dad_name.innerHTML = data[0]["dad_name"];
//                 dad_nation.innerHTML = data[0]["dad_nation"];
//                 dad_occp.innerHTML = data[0]["dad_occp"];
//                 dad_date.innerHTML = data[0]["dad_date"];
//                 dad_addr.innerHTML = data[0]["dad_addr"];
//                 mom_name.innerHTML = data[0]["mom_name"];
//                 mom_nation.innerHTML = data[0]["mom_nation"];
//                 mom_occp.innerHTML = data[0]["mom_occp"];
//                 mom_date.innerHTML = data[0]["mom_date"];
//                 mom_addr.innerHTML = data[0]["mom_addr"];
//                 child_name1.innerHTML = data[0]["child_name1"];
//                 child_nation1.innerHTML = data[0]["child_nation1"];
//                 child_occp1.innerHTML = data[0]["child_occp1"];
//                 child_date1.innerHTML = data[0]["child_date1"];
//                 child_addr1.innerHTML = data[0]["child_addr1"];
//                 child_name2.innerHTML = data[0]["child_name2"];
//                 child_nation2.innerHTML = data[0]["child_nation2"];
//                 child_occp2.innerHTML = data[0]["child_occp2"];
//                 child_date2.innerHTML = data[0]["child_date2"];
//                 child_addr2.innerHTML = data[0]["child_addr2"];
//                 name.innerHTML = data[0]["name"];
//                 relationship.innerHTML = data[0]["relationship"];
//                 contact_phone.innerHTML = data[0]["contact_phone"];
//                 zip_code.innerHTML = data[0]["zip_code"];
//             // visa_id.value = data["visa_id"];
//             // lastName.value = data["lastName"];
//             // firstName.value = data["firstName"];
//             // save_code.value = data["save_code"];
//         }
//         else{
//             // visa_id.value = "";
//             // lastName.value = "";
//             // firstName.value = "";
//             // save_code.value = "";
//             email.value = "11111";
//             visa_id.value = "";
//             firstName.value = "";
//             lastName.value = "";
//             birth_country.value = "";
//             birth_province.value = "";
//             birth_city.value = "";
//             birth_dis.value = "";
//             driver.value = "";
//             inviter_name.value = "";
//             inviter_relationship.value = "";
//             inviter_id.value = "";
//             inviter_dial.value = "";
//             inviter_addr.value = "";
//             employ.value = "";
//             income.value = "";
//             date1.value = "";
//             em_name1.value = "";
//             em_addr1.value = "";
//             em_dial1.value = "";
//             em_pos1.value = "";
//             em_duty1.value = "";
//             sup_name1.value = "";
//             sup_dial1.value = "";
//             date2.value = "";
//             em_name2.value = "";
//             em_addr2.value = "";
//             em_dial2.value = "";
//             em_pos2.value = "";
//             em_duty2.value = "";
//             sup_name2.value = "";
//             sup_dial2.value = "";
//             from1.value = "";
//             to1.value = "";
//             sc_name1.value = "";
//             sc_addr1.value = "";
//             major1.value = "";
//             from2.value = "";
//             to2.value = "";
//             sc_name2.value = "";
//             sc_addr2.value = "";
//             major2.value = "";
//             from3.value = "";
//             to3.value = "";
//             sc_name3.value = "";
//             sc_addr3.value = "";
//             major3.value = "";
//             cur_addr.value = "";
//             phone.value = "";
//             sp_name.value = "";
//             sp_nation.value = "";
//             sp_occp.value = "";
//             sp_date.value = "";
//             sp_coun.value = "";
//             sp_city.value = "";
//             sp_dis.value = "";
//             dad_name.value = "";
//             dad_nation.value = "";
//             dad_occp.value = "";
//             dad_date.value = "";
//             dad_addr.value = "";
//             mom_name.value = "";
//             mom_nation.value = "";
//             mom_occp.value = "";
//             mom_date.value = "";
//             mom_addr.value = "";
//             child_name1.value = "";
//             child_nation1.value = "";
//             child_occp1.value = "";
//             child_date1.value = "";
//             child_addr1.value = "";
//             child_name2.value = "";
//             child_nation2.value = "";
//             child_occp2.value = "";
//             child_date2.value = "";
//             child_addr2.value = "";
//             name.value = "";
//             relationship.value = "";
//             contact_phone.value = "";
//             zip_code.value = "";
//         }
//     })
// }
//
// function back(e){
//     let buttons = document.getElementsByClassName('admin_result')
//     for (var i = 0; i<buttons.length;i++) {
//         buttons[i].style.display="block";
//     }
//     let form = document.getElementsByClassName('display_admin')
//     for (var i = 0; i<form.length;i++) {
//         form[i].style.display="none";
//     }
//     // let fetch_code = e.innerHTML
//     // // 直接调用$.get(URL, [data], [callback])发起GET请求
//     // $.get("http://localhost:8000/visa_2.0/getcodes.php",{fetch_code: fetch_code}, function(res) {
//     //     var data = JSON.parse(res);
//     //     console.log(data);
//     //     var codes = [];
//     //     var times = [];
//     //     for(var i = 0; i < data.length; i++){
//     //         codes[i] = data[i]['save_code']
//     //         times[i] = data[i]['time']
//     //     }
//     //     addButton(data.length, codes, times)
//         // var visa_id = document.getElementById("visa_id")
//         // var lastName = document.getElementById("lastName")
//         // var firstName = document.getElementById("firstName")
//         // var save_code = document.getElementById("save_code")
//         // if (data["status"] === 1){
//         //     visa_id.value = data["visa_id"];
//         //     lastName.value = data["lastName"];
//         //     firstName.value = data["firstName"];
//         //     save_code.value = data["save_code"];
//         // }
//         // else{
//         //     visa_id.value = "";
//         //     lastName.value = "";
//         //     firstName.value = "";
//         //     save_code.value = "";
//         // }
//     // })
// }
