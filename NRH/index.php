<?php include'Head.php'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
    <title></title>
</head>

<body>
    <div class="row">
        <div class="span8">
            <form action="" target="_blank" class="form-horizontal" id="horseForm" method="post" enctype="multipart/form-data">
                <div class="table">
                    <!-- start of whole table -->

                    <div class="control-group radio " id="horseSelect">
                        <legend>Välj vilket typ av häst du har.</legend>

                        <div class="control-group">
                            <input type="radio" id="female" name="horseType" value="Hona / Kastrerad ">Hona / Kastrerad
                        </div>

                        <div class="control-group">
                            <input type="radio" id="Draktig" name="horseType" value="Dräktig">Dräktig <input type="checkbox" id="EightMonths" class="checkbox" name="Months" value="EightMonths">&nbsp;8/9 Månad <input type="checkbox" id="TenMonths" class="checkbox" name="Months" value="TenMonths">&nbsp;10 Månad <input type="checkbox" id="ElevenMonths" class="checkbox" name="Months" value="ElevenMonths">&nbsp;11 Månad
                        </div>

                        <div class="control-group">
                            <input type="radio" id="Hane" name="horseType" value="Hane">Hane <input type="text" id="HaneMonths" name="HaneMonths" value="" class="numbersOnly input-mini">&nbsp;Månad
                        </div>

                        <div class="control-group">
                            <input type="radio" id="Hingst" name="horseType" value="Hingst">Hingst
                        </div><a href="#1" id="icon1" class="btn btn-success pull-right" rel="popover" data-content="Välj den typen av häst du har, resultatet kommer bero på vilken typ av häst du valde.om du valde ung häst så skriv åldern av hästen i månader.">Info</a>
                    </div>

                    <div class="control-group" id="weighttype">
                        <!-- <div class="weighttype"> This is div holds different type of weights -->
                        <legend>Ange din hästs ideala vikt.</legend> <!-- input for accurate weight --> <input type="text" name="weight" id="weight2" class="numbersOnly input-mini" value="">&nbsp;Kg<br>
                        <br>
                        <a href="horse_scale.php" class="nextButton">klicka här</a> Om du inte vet din häst vikt <a href="#2" id="icon2" class="btn btn-success pull-right" rel="popover" data-content="Ange dina hästars vikt i kg använd endast siffror." data-origina-title="Info">Info</a>
                    </div>

                    <div class="control-group" id="horsetype">
                        <!--This is div holds different type of horses -->
                        <legend>Välj den utfodring typ.</legend> <input type="radio" id="latt" name="horse" value="Lätt"> Lättfödd&nbsp;&nbsp;&nbsp; <input type="radio" id="normal" name="horse" value="Normal"> Normalfödd&nbsp;&nbsp;&nbsp; <input type="radio" id="svart" name="horse" value="Svart"> Svårfödd <a href="#3" id="icon3" class="btn btn-success pull-right" rel="popover" data-content="Ange vilken typ av häst du har." data-origina-title="Info">Info</a>
                    </div>

                    <div class="control-group" id="FatSkinny">
                        <!--This is div holds different type of horses weight-->
                        <legend>Är din häst för smal eller tjock?</legend> <input type="radio" id="Small" name="horsefiger" value="Smal"> Smal &nbsp;&nbsp;&nbsp; <input type="radio" id="Normal" name="horsefiger" value="Normal"> Normal &nbsp;&nbsp;&nbsp; <input type="radio" id="Tjok" name="horsefiger" value="Tjock"> Tjock<br>
                        <br>
                        <a href="horseWeight.php" class="nextButton">klicka här</a> &nbsp;&nbsp; Om du inte vet hullbedömning av hästar <a href="#4" id="icon4" class="btn btn-success pull-right" rel="popover" data-content="Välja vilket tillståndet din häst är i just nu." data-origina-title="Info">Info</a>
                    </div>

                    <div class="control-group" id="Foodtable">
                        <legend>Skriv in vilken typ av hö du har.</legend> <input type="text" name="hayInput" id="hayInput" placeholder="Text" class="hayInput input-mini"><br>
                        <br>
                        <br>
                        <input type="text" name="FoodWeight" id="FoodWeight" class="numbersOnly input-mini" value=""> Kg<br>
                        <br>
                        <input type="button" id="AddTextField" class="btn" name="AddTextField" value="Nytt Fält"><br>
                        <br>

                        <table class="table table-bordered" id="Row1">
                            <thead>
                                <tr>
                                    <th>MJ</th>

                                    <th>SMBRP</th>

                                    <th>Ca</th>

                                    <th>P</th>

                                    <th>Mg</th>

                                    <th>SE</th>

                                    <th>TS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><input type="text" name="energy" id="MJ1" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SMBRP1" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="Ca1" value="" class="numbersOnly span1 "></td>

                                    <td><input type="text" name="energy" id="Phos1" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="MG1" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SE1" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="TS1" value="" class="numbersOnly span1"></td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="table table-bordered" id="Row2">
                            <thead>
                                <tr>
                                    <th>MJ</th>

                                    <th>SMBRP</th>

                                    <th>Ca</th>

                                    <th>P</th>

                                    <th>Mg</th>

                                    <th>SE</th>

                                    <th>TS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><input type="text" name="energy" id="MJ2" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SMBRP2" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="Ca2" value="" class="numbersOnly span1 "></td>

                                    <td><input type="text" name="energy" id="Phos2" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="MG2" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SE2" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="TS2" value="" class="numbersOnly span1"></td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="table table-bordered" id="Row3">
                            <thead>
                                <tr>
                                    <th>MJ</th>

                                    <th>SMBRP</th>

                                    <th>Ca</th>

                                    <th>P</th>

                                    <th>Mg</th>

                                    <th>SE</th>

                                    <th>TS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><input type="text" name="energy" id="MJ3" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SMBRP3" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="Ca3" value="" class="numbersOnly span1 "></td>

                                    <td><input type="text" name="energy" id="Phos3" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="MG3" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SE3" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="TS3" value="" class="numbersOnly span1"></td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="table table-bordered" id="Row4">
                            <thead>
                                <tr>
                                    <th>MJ</th>

                                    <th>SMBRP</th>

                                    <th>Ca</th>

                                    <th>P</th>

                                    <th>Mg</th>

                                    <th>SE</th>

                                    <th>TS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><input type="text" name="energy" id="MJ4" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SMBRP4" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="Ca4" value="" class="numbersOnly span1 "></td>

                                    <td><input type="text" name="energy" id="Phos4" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="MG4" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SE4" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="TS4" value="" class="numbersOnly span1"></td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="table table-bordered" id="Row5">
                            <thead>
                                <tr>
                                    <th>MJ</th>

                                    <th>SMBRP</th>

                                    <th>Ca</th>

                                    <th>P</th>

                                    <th>Mg</th>

                                    <th>SE</th>

                                    <th>TS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><input type="text" name="energy" id="MJ5" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SMBRP5" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="Ca5" value="" class="numbersOnly span1 "></td>

                                    <td><input type="text" name="energy" id="Phos5" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="MG5" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SE5" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="TS5" value="" class="numbersOnly span1"></td>
                                </tr>
                            </tbody>
                        </table><a href="#" id="icon7" class="btn btn-success pull-right" rel="popover" data-content="Välj den typ av protein du har så att du kan se hur mycket mineraler och energi maten innehåller" data-origina-title="Info">Info</a>
                    </div>

                    <div class="checkbox control-group" id="ProteinFoder">
                        <legend>Välj de Proteinfodermedel du har tillgängligt.</legend> <input type="checkbox" class="checkbox" id="Bryggerijast" name="food" value="0"> Bryggerijäst<br>
                        <input type="checkbox" class="checkbox" id="Linfro" name="food" value="1"> Lin<br>
                        <input type="checkbox" class="checkbox" id="PotatisProtein" name="food" value="2"> Potatisprotein<br>
                        <input type="checkbox" class="checkbox" id="Raps" name="food" value="3"> Raps<br>
                        <input type="checkbox" class="checkbox" id="Sojamjo" name="food" value="4"> Sojamjöl<br>
                        <input type="checkbox" class="checkbox" id="Sojabona" name="food" value="5"> Sojaböna<br>
                        <input type="checkbox" class="checkbox" id="SolrosExpellerEj" name="food" value="6"> Solros<br>
                        <input type="checkbox" class="checkbox" id="Arter" name="food" value="7"> Ärter<br>
                    </div>

                    <div id="FoodRowTable" class="control-group">
                        <input type="button" id="AddFoodText1" name="AddFoodText1" class="btn" value="Nytt Fält">

                        <table class="table table-bordered" id="FoodRow1">
                            <thead>
                                <tr>
                                    <th>MJ</th>

                                    <th>SMBRP</th>

                                    <th>Ca</th>

                                    <th>P</th>

                                    <th>Mg</th>

                                    <th>SE</th>

                                    <th>TS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><input type="text" name="energy" id="MJFood1" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SMBRPFood1" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="CaFood1" value="" class="numbersOnly span1 "></td>

                                    <td><input type="text" name="energy" id="PhosFood1" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="MGFood1" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SEFood1" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="TSFood1" value="" class="numbersOnly span1"></td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="table table-bordered" id="FoodRow2">
                            <thead>
                                <tr>
                                    <th>MJ</th>

                                    <th>SMBRP</th>

                                    <th>Ca</th>

                                    <th>P</th>

                                    <th>Mg</th>

                                    <th>SE</th>

                                    <th>TS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><input type="text" name="energy" id="MJFood2" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SMBRPFood2" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="CaFood2" value="" class="numbersOnly span1 "></td>

                                    <td><input type="text" name="energy" id="PhosFood2" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="MGFood2" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SEFood2" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="TSFood2" value="" class="numbersOnly span1"></td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="table table-bordered" id="FoodRow3">
                            <thead>
                                <tr>
                                    <th>MJ</th>

                                    <th>SMBRP</th>

                                    <th>Ca</th>

                                    <th>P</th>

                                    <th>Mg</th>

                                    <th>SE</th>

                                    <th>TS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><input type="text" name="energy" id="MJFood3" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SMBRPFood3" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="CaFood3" value="" class="numbersOnly span1 "></td>

                                    <td><input type="text" name="energy" id="PhosFood3" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="MGFood3" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SEFood3" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="TSFood3" value="" class="numbersOnly span1"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="checkbox control-group" id="DiverseFoder">
                        <legend>Välj den Diverse Fodermedel du har tillgängligt.</legend> <input type="checkbox" class="checkbox" id="Aspbark" name="food" value="0"> Aspbark<br>
                        <input type="checkbox" class="checkbox" id="Asplov" name="food" value="1"> Asplöv<br>
                        <input type="checkbox" class="checkbox" id="Morot" name="food" value="2"> Morot<br>
                        <input type="checkbox" class="checkbox" id="Sockerbeta" name="food" value="3"> Sockerbeta, melasserad<br>
                        <input type="checkbox" class="checkbox" id="SockerbetaOme" name="food" value="4"> Sockerbeta,omelasserad<br>
                        <input type="checkbox" class="checkbox" id="SockerbetaBet" name="food" value="5"> Sockerbeta,betmelass<br>
                        <input type="checkbox" class="checkbox" id="Vegetabilisk" name="food" value="6">Vegetabiliskt fett (oija)<br>
                        <br>
                        <br>
                    </div>

                    <div class="control-group" id="EndFoodtable">
                        <input type="button" id="AddFoodText2" class="btn" name="AddFoodText2" value="Nytt Fält"><br>
                        <br>

                        <table class="table table-bordered" id="FoodRow11">
                            <thead>
                                <tr>
                                    <th>MJ</th>

                                    <th>SMBRP</th>

                                    <th>Ca</th>

                                    <th>P</th>

                                    <th>Mg</th>

                                    <th>SE</th>

                                    <th>TS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><input type="text" name="energy" id="MJDive1" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SMBRPDive1" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="CaDive1" value="" class="numbersOnly span1 "></td>

                                    <td><input type="text" name="energy" id="PhosDive1" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="MGDive1" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SEDive1" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="TSDive1" value="" class="numbersOnly span1"></td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="table table-bordered" id="FoodRow22">
                            <thead>
                                <tr>
                                    <th>MJ</th>

                                    <th>SMBRP</th>

                                    <th>Ca</th>

                                    <th>P</th>

                                    <th>Mg</th>

                                    <th>SE</th>

                                    <th>TS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><input type="text" name="energy" id="MJDive2" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SMBRPDive2" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="CaDive2" value="" class="numbersOnly span1 "></td>

                                    <td><input type="text" name="energy" id="PhosDive2" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="MGDive2" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SEDive2" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="TSDive2" value="" class="numbersOnly span1"></td>
                                </tr>
                            </tbody>
                        </table><a href="#8" id="icon8" class="btn btn-success pull-right" rel="popover" data-content="Välj den typ av mat du har så att du kan se hur mycket mineraler och energi maten innehåller" data-origina-title="Info">Info</a>

                        <table class="table table-bordered" id="FoodRow33">
                            <thead>
                                <tr>
                                    <th>MJ</th>

                                    <th>SMBRP</th>

                                    <th>Ca</th>

                                    <th>P</th>

                                    <th>Mg</th>

                                    <th>SE</th>

                                    <th>TS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><input type="text" name="energy" id="MJDive3" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SMBRPDive3" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="CaDive3" value="" class="numbersOnly span1 "></td>

                                    <td><input type="text" name="energy" id="PhosDive3" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="MGDive3" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="SEDive3" value="" class="numbersOnly span1"></td>

                                    <td><input type="text" name="energy" id="TSDive3" value="" class="numbersOnly span1"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div><a href="#ResultBody" data-toggle="modal"><input type="button" value="Räkna ut" class="btn btn-large btn-primary" name="submit" id="calcu" data-toggle="modal"></a>
                </div><!-- table end -->
            </form>
        </div>
    </div>

    <div id="ResultBody" class="modal hide fade" aria-hidden="true">
        <!--This is result viewer and holds gray color body -->

        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>

            <h3 id="myModalLabel">Result:</h3>
        </div>

        <div class="modal-body">
            <div id="ResultHead"></div><!--This is result for horse type you selected -->

            <div id="ResultText"></div><!--prints out the result for requirements horse calculation -->

            <div id="DraktigResult"></div><!--This is result of the for pregenant horse -->

            <div id="ResultText2"></div><!--prints out idf horse is small fat or normal -->

            <div id="Result11"></div><!--This is result of the for first energy break down -->

            <div id="Result22"></div><!--This is result of the for second energy break down  -->

            <div id="Result33"></div><!--This is result of the for third energy break down  -->

            <div id="Result44"></div><!--This is result of the for forth energy break down  -->

            <div id="Result55"></div><!--This is result of the for fifth energy break down  -->

            <div id="ResultTravGalopp"></div><!--This is result of the for Trav/Galopp break down -->

            <div id="Foodfield1"></div><!--This is result of the for the user Proteinfodermedel input(food they have at home) -->

            <div id="Foodfield2"></div><!--This is result of the for the user Proteinfodermedel input(food they have at home) -->

            <div id="Foodfield3"></div><!--This is result of the for the user Proteinfodermedel input(food they have at home) -->

            <div id="Diversefield1"></div><!--This is result of the for the user Diverse Fodermedel input(food they have at home) -->

            <div id="Diversefield2"></div><!--This is result of the for the user Diverse Fodermedel input(food they have at home) -->

            <div id="Diversefield3"></div><!--This is result of the for the user Diverse Fodermedel  input(food they have at home) -->
        </div>

        <div class="modal-footer">
            <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button> <button class="btn btn-primary">Save</button> <a href="" class="btn btn-primary" onclick="window.print(); return false;">Print</a>
        </div>
    </div><script type="text/javascript">


    $(function() {  
        $("#icon1").popover({ trigger: 'hover' });
        $("#icon2").popover({ trigger: 'hover' });
        $("#icon3").popover({ trigger: 'hover' });
        $("#icon4").popover({ trigger: 'hover' });
        $("#icon5").popover({ trigger: 'hover' });
        $("#icon6").popover({ trigger: 'hover' });
        $("#icon7").popover({ trigger: 'hover' });
        $("#icon8").popover({ trigger: 'hover' });
        });
    </script><?php include'footer.php'; ?>
</body>
</html>
