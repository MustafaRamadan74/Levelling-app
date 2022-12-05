// ============= get all inputs first stand =============
let BM = $("#BM");
let readingOfStaff = $("#readingOfBM");
let reading = $("#readingOfFirstPT");
let forSight = $("#forSight");
let RL1;
let HI;
let RLOfPoints;
let RLChangePT;

// ================= get result first stand ===========
$("#result").click(function () {
    if (BM.val() != "" && readingOfStaff.val() != "" && reading.val() != "") {
        BM = Number(BM.val());
        readingOfStaff = Number(readingOfStaff.val());
        forSight = Number(forSight.val());
        HI = BM + readingOfStaff;
        RLChangePT = HI - forSight;
        RLChangePT = Math.round(RLChangePT * 1000) / 1000
        $("#displayHI").html(`
            <div class="h5">Height of instrument : ${HI}<div/>
        `)
        $("#displayHI1").html(`
            <div class="h5">R.L for change PT : ${RLChangePT}<div/>
        `)

        RLOfPoints = reading.val().split(" ");
        displayResult();

        $("#arthmeticCheck").html(`Arthmetic Check : `)
        $("#checkHead").html(`
                    <th>sum(BS) - sum(FS)</th>
                    <th>=</th>
                    <th>(RL)last - (RL)first</th>
        `)
        $("#checkResult").html(`
            <tr>
                <td>${Math.round((readingOfStaff - forSight) * 1000) / 1000}</td>
                <td>=</td>
                <td>${Math.round((RLChangePT - BM) * 1000) / 1000}</td>
            </tr>
        `)

        // =========== second stand ===========
        let BM2 = $("#BM2");
        let readingOfStaff2 = $("#readingOfBM2");
        let reading2 = $("#readingOfFirstPT2");
        let forSight2 = $("#forSight2");
        let RL12;
        let HI2;
        let RLOfPoints2;
        let RLChangePT2;
        $("#secondStand").removeClass("d-none")
        $("#result2").click(function () {
            if (BM2.val() != "" && readingOfStaff2.val() != "" && reading2.val() != "") {
                BM2 = Number(BM2.val());
                readingOfStaff2 = Number(readingOfStaff2.val());
                forSight2 = Number(forSight2.val());
                HI2 = BM2 + readingOfStaff2;
                RLChangePT2 = HI2 - forSight2;
                RLChangePT2 = Math.round(RLChangePT2 * 1000) / 1000
                $("#displayHI2").html(`
                <div class="h5">Height of instrument : ${HI2}<div/>
            `)
                $("#displayHI22").html(`
                <div class="h5">R.L for change PT : ${RLChangePT2}<div/>
            `)

                RLOfPoints2 = reading2.val().split(" ");
                displayResult();

                $("#arthmeticCheck2").html(`Arthmetic Check : `)
                $("#checkHead2").html(`
                        <th>sum(BS) - sum(FS)</th>
                        <th>=</th>
                        <th>(RL)last - (RL)first</th>
            `)
                $("#checkResult2").html(`
                <tr>
                    <td>${Math.round((readingOfStaff2 - forSight2) * 1000) / 1000}</td>
                    <td>=</td>
                    <td>${Math.round((RLChangePT2 - BM2) * 1000) / 1000}</td>
                </tr>
            `)
                function displayResult() {

                    hasala = ``
                    for (let i = 0; i < RLOfPoints2.length; i++) {
                        reading2 = Number(RLOfPoints2[i]);
                        RL12 = HI2 - reading2;
                        RL12 = Math.round(RL12 * 1000) / 1000
                        hasala += `<tr>
                            <td class="h6">R.L of PT ${i + 1} : ${RL12}</td>
                            </tr>`
                    }
                    $("#title2").html(`
                Reduced Levels :
                `)
                    $("#displayResult2").html(`
                    ${hasala}
                        `)
                }
                // =========== Third stand ===========
                let BM3 = $("#BM3");
                let readingOfStaff3 = $("#readingOfBM3");
                let reading3 = $("#readingOfFirstPT3");
                let forSight3 = $("#forSight3");
                let RL13;
                let HI3;
                let RLOfPoints3;
                let RLChangePT3;
                $("#thirdStand").removeClass("d-none")
                $("#result3").click(function () {
                    if (BM3.val() != "" && readingOfStaff3.val() != "" && reading3.val() != "") {
                        BM3 = Number(BM3.val());
                        readingOfStaff3 = Number(readingOfStaff3.val());
                        forSight3 = Number(forSight3.val());
                        HI3 = BM3 + readingOfStaff3;
                        RLChangePT3 = HI3 - forSight3;
                        RLChangePT3 = Math.round(RLChangePT3 * 1000) / 1000
                        $("#displayHI3").html(`
                <div class="h5">Height of instrument : ${HI3}<div/>
            `)
                        $("#displayHI23").html(`
                <div class="h5">R.L for change PT : ${RLChangePT3}<div/>
            `)

                        RLOfPoints3 = reading3.val().split(" ");
                        displayResult();

                        $("#arthmeticCheck3").html(`Arthmetic Check : `)
                        $("#checkHead3").html(`
                        <th>sum(BS) - sum(FS)</th>
                        <th>=</th>
                        <th>(RL)last - (RL)first</th>
            `)
                        $("#checkResult3").html(`
                <tr>
                    <td>${Math.round((readingOfStaff3 - forSight3) * 1000) / 1000}</td>
                    <td>=</td>
                    <td>${Math.round((RLChangePT3 - BM3) * 1000) / 1000}</td>
                </tr>
            `)
                        function displayResult() {

                            hasala = ``
                            for (let i = 0; i < RLOfPoints3.length; i++) {
                                reading3 = Number(RLOfPoints3[i]);
                                RL13 = HI3 - reading3;
                                RL13 = Math.round(RL13 * 1000) / 1000
                                hasala += `<tr>
                            <td class="h6">R.L of PT ${i + 1} : ${RL13}</td>
                            </tr>`
                            }
                            $("#title3").html(`
                Reduced Levels :
                `)
                            $("#displayResult3").html(`
                    ${hasala}
                        `)
                        }
                    }

                    // =========== Fourth stand ===========
                    let BM4 = $("#BM4");
                    let readingOfStaff4 = $("#readingOfBM4");
                    let reading4 = $("#readingOfFirstPT4");
                    let forSight4 = $("#forSight4");
                    let RL14;
                    let HI4;
                    let RLOfPoints4;
                    let RLChangePT4;
                    $("#fourthStand").removeClass("d-none")
                    $("#result4").click(function () {
                        if (BM4.val() != "" && readingOfStaff4.val() != "" && reading4.val() != "") {
                            BM4 = Number(BM4.val());
                            readingOfStaff4 = Number(readingOfStaff4.val());
                            forSight4 = Number(forSight4.val());
                            HI4 = BM4 + readingOfStaff4;
                            RLChangePT4 = HI4 - forSight4;
                            RLChangePT4 = Math.round(RLChangePT4 * 1000) / 1000
                            $("#displayHI4").html(`
                <div class="h5">Height of instrument : ${HI4}<div/>
            `)
                            $("#displayHI24").html(`
                <div class="h5">R.L for change PT : ${RLChangePT4}<div/>
            `)

                            RLOfPoints4 = reading4.val().split(" ");
                            displayResult();

                            $("#arthmeticCheck4").html(`Arthmetic Check : `)
                            $("#checkHead4").html(`
                        <th>sum(BS) - sum(FS)</th>
                        <th>=</th>
                        <th>(RL)last - (RL)first</th>
            `)
                            $("#checkResult4").html(`
                <tr>
                    <td>${Math.round((readingOfStaff4 - forSight4) * 1000) / 1000}</td>
                    <td>=</td>
                    <td>${Math.round((RLChangePT4 - BM4) * 1000) / 1000}</td>
                </tr>
            `)
                            function displayResult() {

                                hasala = ``
                                for (let i = 0; i < RLOfPoints4.length; i++) {
                                    reading4 = Number(RLOfPoints4[i]);
                                    RL14 = HI4 - reading4;
                                    RL14 = Math.round(RL14 * 1000) / 1000
                                    hasala += `<tr>
                            <td class="h6">R.L of PT ${i + 1} : ${RL14}</td>
                            </tr>`
                                }
                                $("#title4").html(`
                Reduced Levels :
                `)
                                $("#displayResult4").html(`
                    ${hasala}
                        `)
                            }
                        }
                    })
                })
            }
        })
    }
    else {
        $("#displayResult").html(`
            <div class="text-warning">* Please enter the values * <div/>
        `)
    }
})

// ====================== display first stand ===================
function displayResult() {

    hasala = ``
    for (let i = 0; i < RLOfPoints.length; i++) {
        reading = Number(RLOfPoints[i]);
        RL1 = HI - reading;
        RL1 = Math.round(RL1 * 1000) / 1000
        hasala += `<tr>
                <td class="h6">R.L of PT ${i + 1} : ${RL1}</td>
                </tr>`
    }
    $("#title").html(`
    Reduced Levels :
    `)
    $("#displayResult").html(`
        ${hasala}
            `)
}

