import React from "react";

interface LineProps {
  width?: string; 
  height?: string; 
  color?: string; 
}

const Line: React.FC<LineProps> = ({ width = "100", height = "100", color = "black" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 1000 1000">
      <title>my vector image</title>
      <rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="transparent" stroke="none" />
      <g className="currentLayer">
        <title>Layer 1</title>
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="13"
          strokeLinejoin="round"
          points="124.31905343286553,227.64284955036103 125.50952957603646,227.04761147877556 126.70000571920735,226.4523734071901 127.89048186237831,225.85713533560465 129.67619607713465,224.66665919243374 133.2476245066474,224.0714211208483 135.03333872140382,223.47618304926283 137.41429100774565,222.88094497767736 140.39048136567294,222.2857069060919 143.36667172360023,221.69046883450648 144.55714786677117,221.09523076292098 147.53333822469847,220.49999269133554 148.72381436786935,220.49999269133554 151.10476665421118,219.3095165481646 152.29524279738212,218.71427847657915 155.86667122689488,217.52380233340818 157.05714737006582,216.92856426182277 158.2476235132367,216.92856426182277 159.43809965640764,216.3333261902373 161.223813871164,215.1428500470664 162.41429001433494,215.1428500470664 163.0095280859204,215.1428500470664 164.2000042290913,214.54761197548092 164.79524230067676,213.95237390389548 166.58095651543317,213.35713583231 167.77143265860403,213.35713583231 169.55714687336044,212.76189776072457 173.12857530287317,210.97618354596818 176.70000373238594,209.78570740279724 179.67619409031323,208.59523125962633 180.86667023348417,207.99999318804086 183.247622519826,206.80951704486995 183.84286059141147,206.80951704486995 184.43809866299694,206.80951704486995 186.22381287775326,206.2142789732845 190.39047937885155,205.61904090169907 193.36666973677882,205.02380283011357 196.3428600947061,204.42856475852813 199.91428852421888,203.23808861535724 202.2952408105607,202.64285054377174 203.48571695373164,202.64285054377174 205.271431168488,202.64285054377174 206.4619073116589,202.64285054377174 208.2476215264153,202.04761247218627 208.84285959800073,201.45237440060083 209.43809766958623,201.45237440060083 211.81904995592805,201.45237440060083 213.60476417068446,200.85713632901536 214.79524031385534,200.85713632901536 217.77143067178264,200.2618982574299 220.15238295812446,199.66666018584445 223.72381138763723,199.07142211425895 227.29523981714996,199.07142211425895 230.86666824666275,199.07142211425895 233.24762053300458,199.07142211425895 235.62857281934646,197.88094597108807 236.22381089093187,197.88094597108807 236.81904896251734,197.88094597108807 238.00952510568828,197.2857078995026 238.60476317727375,197.2857078995026 241.58095353520105,196.09523175633169 242.77142967837193,195.49999368474622 245.15238196471378,194.90475561316077 249.319048465812,193.71427946998986 251.1047626805684,193.71427946998986 258.24761953959387,192.52380332681892 264.20000025544846,192.52380332681892 270.7476190428885,192.52380332681892 276.6999997587431,192.52380332681892 283.24761854618316,192.52380332681892 288.60476119045234,192.52380332681892 292.1761896199651,192.52380332681892 295.7476180494778,192.52380332681892 298.1285703358197,192.52380332681892 300.5095226221615,192.52380332681892 301.69999876533245,192.52380332681892 302.89047490850334,191.9285652552335 303.4857129800888,191.9285652552335 304.0809510516743,191.9285652552335 305.86666526643063,191.333327183648 307.65237948118704,190.73808911206254 310.03333176752886,190.73808911206254 311.8190459822852,190.73808911206254 314.1999982686271,190.73808911206254 315.98571248338345,190.73808911206254 317.77142669813986,190.73808911206254 319.5571409128962,190.73808911206254 323.128569342409,190.73808911206254 326.1047597003363,190.73808911206254 329.67618812984904,190.73808911206254 333.24761655936175,190.73808911206254 335.62856884570357,190.73808911206254 336.8190449888745,190.73808911206254 338.00952113204545,190.73808911206254 338.6047592036309,190.73808911206254 340.98571148997274,190.1428510404771 343.96190184790004,190.1428510404771 346.93809220582733,190.1428510404771 349.31904449216916,190.1428510404771 351.10475870692557,190.1428510404771 353.4857109932674,190.1428510404771 354.67618713643833,190.1428510404771 356.4619013511947,190.1428510404771 358.24761556595115,190.1428510404771 360.03332978070745,190.1428510404771 363.0095201386348,190.1428510404771 366.5809485681475,190.1428510404771 370.15237699766027,190.1428510404771 373.72380542717303,190.1428510404771 378.4857099998567,190.1428510404771 381.46190035778403,189.54761296889163 383.2476145725404,188.95237489730619 385.03332878729674,188.35713682572072 389.199995288395,188.35713682572072 392.17618564632227,188.35713682572072 395.74761407583503,188.35713682572072 400.50951864851874,187.1666606825498 402.2952328632751,187.1666606825498 404.0809470780315,186.57142261096433 405.8666612927878,186.57142261096433 406.4618993643733,186.57142261096433 408.2476135791297,185.38094646779342 410.62856586547144,185.38094646779342 413.60475622339874,184.78570839620795 418.3666607960825,183.59523225303704 421.9380892255952,183.59523225303704 426.69999379827885,182.9999941814516 429.67618415620615,182.9999941814516 430.8666602993771,182.9999941814516 432.6523745141334,182.9999941814516 434.4380887288899,182.9999941814516 436.81904101523173,182.9999941814516 438.0095171584026,182.9999941814516 439.19999330157356,183.59523225303704 440.39046944474455,183.59523225303704 442.17618365950085,183.59523225303704 445.15237401742814,184.78570839620795 448.12856437535544,185.38094646779342 450.5095166616973,185.38094646779342 454.67618316279544,185.9761845393789 457.0571354491373,186.57142261096433 461.22380195023555,186.57142261096433 464.1999923081628,187.1666606825498 465.3904684513338,187.1666606825498 467.77142073767556,187.1666606825498 471.9380872387738,187.1666606825498 474.31903952511567,187.1666606825498 476.69999181145744,187.1666606825498 479.67618216938473,187.76189875413522 482.05713445572667,188.35713682572072 485.6285628852393,188.35713682572072 489.19999131475214,188.35713682572072 492.77141974426485,188.35713682572072 497.5333243169486,188.35713682572072 499.9142766032904,188.35713682572072 501.1047527464613,188.35713682572072 505.2714192475595,188.35713682572072 508.84284767707226,188.35713682572072 512.414276106585,188.35713682572072 515.9857045360977,188.35713682572072 519.5571329656107,188.35713682572072 523.1285613951234,188.35713682572072 524.9142756098797,188.35713682572072 526.6999898246361,188.35713682572072 527.8904659678069,188.35713682572072 530.8666563257343,188.35713682572072 534.438084755247,188.35713682572072 540.3904654711016,188.35713682572072 544.5571319721998,188.35713682572072 549.9142746164689,188.35713682572072 555.2714172607382,188.35713682572072 559.4380837618364,188.35713682572072 561.8190360481781,188.35713682572072 564.19998833452,188.35713682572072 566.5809406208618,188.35713682572072 570.1523690503745,188.35713682572072 574.3190355514728,188.35713682572072 579.0809401241565,188.35713682572072 583.8428446968401,188.35713682572072 586.8190350547675,188.35713682572072 589.7952254126947,188.35713682572072 592.7714157706221,188.35713682572072 595.152368056964,188.95237489730619 598.1285584148911,189.54761296889163 601.1047487728185,190.1428510404771 604.0809391307457,190.73808911206254 608.8428437034295,191.9285652552335 611.8190340613567,192.52380332681892 615.3904624908696,193.1190413984044 617.176176705626,193.71427946998986 620.7476051351387,194.30951754157533 624.9142716362369,194.90475561316077 626.6999858509932,195.49999368474622 630.271414280506,196.09523175633169 633.8428427100187,196.69046982791713 635.6285569247752,197.2857078995026 638.0095092111169,197.88094597108807 640.3904614974589,197.88094597108807 642.7714137838007,198.47618404267354 643.9618899269715,199.07142211425895 645.1523660701425,199.07142211425895 645.7476041417281,199.07142211425895 647.5333183564844,199.66666018584445 648.1285564280697,199.66666018584445 651.1047467859971,200.2618982574299 653.485699072339,200.85713632901536 656.4618894302662,201.45237440060083 660.0333178597788,202.04761247218627 661.22379400295,202.64285054377174 662.4142701461208,202.64285054377174 663.0095082177063,202.64285054377174 663.6047462892918,202.64285054377174 664.1999843608771,203.23808861535724 665.9856985756335,203.83332668694266 667.1761747188044,204.42856475852813 670.1523650767317,205.61904090169907 671.9380792914881,206.80951704486995 673.7237935062446,207.99999318804086 674.9142696494155,208.59523125962633 676.1047457925863,208.59523125962633 677.8904600073428,209.78570740279724 679.0809361505137,210.38094547438268 681.4618884368556,210.97618354596818 682.6523645800264,211.57142161755363 683.2476026516119,211.57142161755363 683.8428407231972,212.1666596891391 683.8428407231972,212.1666596891391 684.4380787947828,212.1666596891391 686.2237930095392,213.35713583231 686.8190310811246,213.95237390389548 688.604745295881,214.54761197548092 689.1999833674665,215.73808811865186 689.7952214390518,216.3333261902373 692.7714117969792,218.11904040499368 694.5571260117356,219.3095165481646 696.9380782980775,219.90475461975007 697.533316369663,220.49999269133554 698.1285544412483,220.49999269133554 699.3190305844194,221.09523076292098 701.1047447991757,222.2857069060919 701.6999828707612,222.88094497767736 "
        />
      </g>
    </svg>
  );
};

export default Line;