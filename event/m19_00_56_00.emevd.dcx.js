// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.3
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeEvent(0, 19002590);
    if (EventFlag(19000950)) {
        $InitializeCommonEvent(0, 90575900, 19000800);
        $InitializeCommonEvent(0, 90575901, 19000800, 750000, 907500000);
        $InitializeCommonEvent(0, 90575902, 19000800, 19005801, 0);
        $InitializeCommonEvent(0, 90515012, 19000800, 7511);
        $InitializeCommonEvent(1, 90515012, 19005801, 7511);
        $InitializeCommonEvent(0, 90515020, 7511, 7512);
        $InitializeCommonEvent(0, 90575000, 19000800, 19005801);
        $InitializeCommonEvent(0, 90575001, 19000800, 19005801);
        $InitializeCommonEvent(0, 90575002, 19000800, 19000801, 19000802);
        $InitializeCommonEvent(0, 90575005, 19000800, 19000801, 72, 5900);
        $InitializeCommonEvent(0, 90575005, 19000800, 19000802, 2, 5901);
        $InitializeCommonEvent(0, 90575006, 19000800, 19000801);
        $InitializeCommonEvent(0, 90575006, 19000800, 19000802);
        $InitializeCommonEvent(0, 90515008, 7511, 7512, 750000, 19000800, 5105, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006800, 19000800, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006801, 19000800, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006802, 19000800, 5108, 0);
        $InitializeCommonEvent(0, 90575008, 7511, 7512, 0, 19000800, 5108, 0);
        $InitializeCommonEvent(0, 90565920, 19000800, 7320);
        $InitializeCommonEvent(0, 90565920, 19005801, 7320);
    }
    if (EventFlag(19000951)) {
        $InitializeCommonEvent(0, 90575100, 19000810);
        $InitializeCommonEvent(0, 90575101, 19000810);
        $InitializeCommonEvent(0, 90575102, 19000810);
        $InitializeCommonEvent(0, 90575900, 19000810);
        $InitializeCommonEvent(0, 90575901, 19000810, 751000, 907510000);
        $InitializeCommonEvent(0, 90575902, 19000810, 0, 0);
        $InitializeCommonEvent(0, 90515012, 19000810, 7511);
        $InitializeCommonEvent(0, 90515020, 7511, 7512);
        $InitializeCommonEvent(0, 90515008, 7511, 7512, 751000, 19000810, 5105, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006810, 19000810, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006811, 19000810, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006812, 19000810, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006813, 19000810, 5108, 0);
        $InitializeCommonEvent(0, 90575150, 7511, 7512, 0, 19000810, 5108, 0);
    }
    if (EventFlag(19000952)) {
        $InitializeCommonEvent(0, 90575900, 19005821);
        $InitializeCommonEvent(0, 90575901, 19000827, 752000, 907520000);
        $InitializeCommonEvent(0, 90575902, 19005821, 0, 0);
        $InitializeCommonEvent(0, 90515012, 19005821, 7511);
        $InitializeCommonEvent(0, 90515020, 7511, 7512);
        $InitializeCommonEvent(0, 90575200, 19005821, 19000827);
        $InitializeCommonEvent(0, 90575201, 19005821, 19000821, 19000820, 19000825, 19000826, 19000827, 19000220, 19000221, 19000222);
        $InitializeCommonEvent(0, 90575202, 19000827, 19000821, 19000820, 19000825, 19000826, 19000222);
        $InitializeCommonEvent(0, 99575205, 19000821, 19000820);
        $InitializeCommonEvent(0, 90575220, 19000825, 19000222);
        $InitializeCommonEvent(0, 90575210, 19000827, 19000820, 19000220);
        $InitializeCommonEvent(0, 90575211, 19000821, 19000820, 19000221);
        $InitializeCommonEvent(0, 90575212, 19000821, 19000825, 19000826, 19000220, 19000221, 19000222, 0);
        if (IsPlayerNo(1)) {
            $InitializeCommonEvent(0, 90575230, 19000822, 10002, 1);
            $InitializeCommonEvent(0, 90575230, 19000823, 10003, 0);
            $InitializeCommonEvent(0, 90575230, 19000824, 10004, 0);
            $InitializeCommonEvent(0, 90575231, 19000822);
            $InitializeCommonEvent(0, 90575232, 19000822);
            $InitializeCommonEvent(0, 90575233, 19000822);
            $InitializeCommonEvent(0, 90575234, 19000822);
        }
        if (IsPlayerNo(2)) {
            $InitializeCommonEvent(0, 90575230, 19000822, 10002, 0);
            $InitializeCommonEvent(0, 90575230, 19000823, 10003, 1);
            $InitializeCommonEvent(0, 90575230, 19000824, 10004, 0);
            $InitializeCommonEvent(0, 90575231, 19000823);
            $InitializeCommonEvent(0, 90575232, 19000823);
            $InitializeCommonEvent(0, 90575233, 19000823);
            $InitializeCommonEvent(0, 90575234, 19000823);
        }
        if (IsPlayerNo(3)) {
            $InitializeCommonEvent(0, 90575230, 19000822, 10002, 0);
            $InitializeCommonEvent(0, 90575230, 19000823, 10003, 0);
            $InitializeCommonEvent(0, 90575230, 19000824, 10004, 1);
            $InitializeCommonEvent(0, 90575231, 19000824);
            $InitializeCommonEvent(0, 90575232, 19000824);
            $InitializeCommonEvent(0, 90575233, 19000824);
            $InitializeCommonEvent(0, 90575234, 19000824);
        }
        $InitializeCommonEvent(0, 90515008, 7511, 7512, 752000, 19005821, 5105, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006821, 19005821, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006822, 19005821, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006823, 19005821, 5108, 0);
        $InitializeCommonEvent(0, 90575240, 7511, 7512, 0, 19005821, 5108, 0);
    }
    if (EventFlag(19000953)) {
        $InitializeCommonEvent(0, 90575900, 19000830);
        $InitializeCommonEvent(0, 90575901, 19000830, 754000, 907540000);
        $InitializeCommonEvent(0, 90575902, 19000830, 0, 0);
        $InitializeCommonEvent(0, 90515012, 19000830, 7511);
        $InitializeCommonEvent(0, 90515020, 7511, 7512);
        $InitializeCommonEvent(0, 90575300, 19000830, 19000220, 19000221);
        $InitializeCommonEvent(0, 90575301, 19000830, 19005835, 19005836);
        $InitializeCommonEvent(0, 90575310, 19000830, 19000200, 19000201, 19000202, 19000203, 19000204, 19000205, 19000206, 19000207, 19000208, 19000209, 19000210, 19000211, 19000212, 19000213, 19000214, 19000215, 19000216, 19000217, 19000218, 19000219);
        $InitializeCommonEvent(0, 90575311, 19000830, 19000200, 19000201, 19000202, 19000203, 19000204, 19000205, 19000206, 19000207, 19000208, 19000209, 19000210, 19000211, 19000212, 19000213, 19000214, 19000215, 19000216, 19000217, 19000218, 19000219);
        $InitializeCommonEvent(0, 90575312, 19000830, 19000200, 19000201, 19000202, 19000203, 19000204, 19000205, 19000206, 19000207, 19000208, 19000209, 19000210, 19000211, 19000212, 19000213, 19000214, 19000215, 19000216, 19000217);
        $InitializeCommonEvent(0, 90575313, 19000830, 19000220, 19000221, 19000222);
        $InitializeCommonEvent(0, 90575320, 19000830, 19005836);
        $InitializeCommonEvent(0, 90575330, 19000830);
        $InitializeCommonEvent(0, 90515008, 7511, 7512, 754000, 19000830, 5105, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006830, 19000830, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006831, 19000830, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006832, 19000830, 5108, 0);
        $InitializeCommonEvent(0, 90575340, 7511, 7512, 0, 19000830, 5108, 0);
    }
    if (EventFlag(19000953)) {
        $InitializeCommonEvent(0, 90575302, 19000830, 19000200);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000201);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000202);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000203);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000204);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000205);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000206);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000207);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000208);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000209);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000210);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000211);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000212);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000213);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000214);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000215);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000216);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000217);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000218);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000219);
    }
    if (EventFlag(19000953)) {
        $InitializeCommonEvent(0, 90575302, 19000830, 19000220);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000221);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000222);
    }
    if (EventFlag(19000953)) {
        $InitializeCommonEvent(0, 90575302, 19000830, 19000230);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000231);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000232);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000233);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000234);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000235);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000236);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000237);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000238);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000239);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000240);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000241);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000242);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000243);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000244);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000245);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000246);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000247);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000248);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000249);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000250);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000251);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000252);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000253);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000254);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000255);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000256);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000257);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000258);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000259);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000260);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000261);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000262);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000263);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000264);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000265);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000266);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000267);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000268);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000269);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000270);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000271);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000272);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000273);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000274);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000275);
        $InitializeCommonEvent(0, 90575302, 19000830, 19000276);
    }
    if (EventFlag(19000954)) {
        $InitializeCommonEvent(0, 90575400, 19000840, 19000849, 19000440, 19000441, 19000442, 19000443, 19000444, 19000445, 19000446, 19000447);
        $InitializeCommonEvent(0, 90575401, 19000849, 19000240, 19000241, 19000242);
        $InitializeCommonEvent(0, 90575402, 19000849, 19000840, 19000240, 19000241, 19000242);
        $InitializeCommonEvent(0, 90575403, 19000849, 19004740, 19004741, 19004742, 19000240, 19000242);
        if (IsPlayerNo(1)) {
            $InitializeCommonEvent(0, 90575404, 19000240, 19004743, 19000243, 19004744, 19000246);
        }
        if (IsPlayerNo(2)) {
            $InitializeCommonEvent(0, 90575404, 19000240, 19004743, 19000244, 19004744, 19000247);
        }
        if (IsPlayerNo(3)) {
            $InitializeCommonEvent(0, 90575404, 19000240, 19004743, 19000245, 19004744, 19000248);
        }
        $InitializeCommonEvent(0, 90575405, 19000240, 19000241, 19000246, 19000247, 19000248);
        $InitializeCommonEvent(0, 99575406, 19000849, 19000240, 19000701, 19000241);
        $InitializeCommonEvent(0, 99575410, 19000840);
        $InitializeCommonEvent(0, 99575420, 19000840);
        $InitializeCommonEvent(0, 99575421, 19000840);
        $InitializeCommonEvent(0, 99575422, 19000840, 19002740, 19002741, 19002742, 19002743, 19002744, 19002745, 19002746, 19002747, 19000440, 19000441, 19000442, 19000443, 19000444, 19000445, 19000446, 19000447);
        $InitializeCommonEvent(0, 90575901, 19000840, 756000, 907550000);
        $InitializeCommonEvent(0, 90575902, 19005840, 0, 0);
        $InitializeCommonEvent(0, 90515012, 19005840, 7511);
        $InitializeCommonEvent(0, 90515020, 7511, 7512);
        $InitializeCommonEvent(0, 99575430, 19000840);
        $InitializeCommonEvent(0, 90515018, 7511, 7512, 756000, 19000840, 45889, 1);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006840, 19000840, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006841, 19000840, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006842, 19000840, 5108, 0);
        $InitializeCommonEvent(0, 99575440, 7511, 7512, 0, 19000840, 5108, 0);
    }
    if (EventFlag(19000955)) {
        $InitializeCommonEvent(0, 90575900, 19000850);
        $InitializeCommonEvent(0, 90575901, 19000850, 760000, 907610000);
        $InitializeCommonEvent(0, 90575902, 19000850, 0, 0);
        $InitializeCommonEvent(0, 90575500, 19000850);
        $InitializeCommonEvent(0, 90575501, 19000850);
        $InitializeCommonEvent(0, 90575510, 19000850);
        $InitializeCommonEvent(0, 90515012, 19000850, 7511);
        $InitializeCommonEvent(0, 90515020, 7511, 7512);
        $InitializeCommonEvent(0, 90515008, 7511, 7512, 760000, 19000850, 5105, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006850, 19000850, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006851, 19000850, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006852, 19000850, 5108, 0);
        $InitializeCommonEvent(0, 90575520, 7511, 7512, 0, 19000850, 5108, 0);
    }
    if (EventFlag(19000956)) {
        $InitializeCommonEvent(0, 90575900, 19000860);
        $InitializeCommonEvent(0, 90575901, 19000860, 490000, 907620000);
        $InitializeCommonEvent(0, 90575902, 19000860, 0, 0);
        $InitializeCommonEvent(0, 90575600, 19000860, 19002860);
        $InitializeCommonEvent(0, 90575601, 19000860); // midir start
        $InitializeCommonEvent(0, 90575603, 19000861); // worm
        $InitializeCommonEvent(0, 90575604, 19000862); // worm
        $InitializeCommonEvent(0, 90575605, 19000863); // worm
        $InitializeCommonEvent(0, 90575606, 19000864); // worm
        $InitializeCommonEvent(0, 90575607, 19000865); // worm
        $InitializeCommonEvent(0, 90575608, 19000866); // worm
        $InitializeCommonEvent(0, 90575609, 19000867); // worm
        $InitializeCommonEvent(0, 90575611, 19000868); // worm
        $InitializeCommonEvent(0, 90575612, 19000869); // worm
        $InitializeCommonEvent(0, 90575613, 19000870); // worm
        $InitializeCommonEvent(0, 90575614, 19000871); // worm
        $InitializeCommonEvent(0, 90575615, 19000872); // check for 6212 jumpscare
        $InitializeCommonEvent(0, 90515012, 19000860, 7511);
        $InitializeCommonEvent(0, 90515020, 7511, 7512);
        $InitializeCommonEvent(0, 90575610, 19000860);
        $InitializeCommonEvent(0, 90515008, 7511, 7512, 490000, 19000860, 5105, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006860, 19000860, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006861, 19000860, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006862, 19000860, 5108, 0);
        $InitializeCommonEvent(0, 99575620, 7511, 7512, 0, 19000860, 5108, 0);
        $InitializeCommonEvent(0, 90575602, 19000860);
    }
    if (EventFlag(19000960)) {
        $InitializeCommonEvent(0, 90575900, 19010800);
        $InitializeCommonEvent(0, 90575901, 19010800, 750000, 907500000);
        $InitializeCommonEvent(0, 90575902, 19010800, 19015801, 0);
        $InitializeCommonEvent(0, 90515012, 19010800, 7511);
        $InitializeCommonEvent(1, 90515012, 19015801, 7511);
        $InitializeCommonEvent(0, 90515020, 7511, 7512);
        $InitializeCommonEvent(0, 90575000, 19010800, 19015801);
        $InitializeCommonEvent(0, 90575051, 19010800, 19015801, 19010801, 19010802);
        $InitializeCommonEvent(0, 90575002, 19010800, 19010801, 19010802);
        $InitializeCommonEvent(0, 90575005, 19010800, 19010801, 72, 5900);
        $InitializeCommonEvent(0, 90575005, 19010800, 19010802, 2, 5901);
        $InitializeCommonEvent(0, 90575006, 19010800, 19010801);
        $InitializeCommonEvent(0, 90575006, 19010800, 19010802);
        $InitializeCommonEvent(0, 90575060, 19010800, 19010801);
        $InitializeCommonEvent(0, 90575060, 19010800, 19010802);
        $InitializeCommonEvent(0, 90575070, 19010800, 19010801, 72, 5908, 51320);
        $InitializeCommonEvent(0, 90575070, 19010800, 19010802, 72, 5909, 51321);
        $InitializeCommonEvent(0, 90575950, 750000, 19010800, 5106, 0);
        $InitializeCommonEvent(0, 90575910, 6001, 7512, 19006800, 19010800, 0, 1);
        $InitializeCommonEvent(0, 90575910, 6001, 7512, 19006801, 19010800, 0, 1);
        $InitializeCommonEvent(0, 90575910, 6001, 7512, 19006802, 19010800, 0, 1);
        $InitializeCommonEvent(0, 90575008, 6001, 7512, 0, 19010800, 0, 1);
    }
    if (EventFlag(19000961)) {
        $InitializeCommonEvent(0, 90575161, 19010810);
        $InitializeCommonEvent(0, 90575102, 19010810);
        $InitializeCommonEvent(0, 90575900, 19010810);
        $InitializeCommonEvent(0, 90575901, 19010810, 751000, 907510000);
        $InitializeCommonEvent(0, 90575902, 19010810, 0, 0);
        $InitializeCommonEvent(0, 90575950, 751000, 19010810, 5106, 0);
        $InitializeCommonEvent(0, 90515012, 19010810, 7511);
        $InitializeCommonEvent(0, 90515020, 7511, 7512);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006810, 19010810, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006811, 19010810, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006812, 19010810, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006813, 19010810, 5108, 0);
        $InitializeCommonEvent(0, 90575150, 7511, 7512, 0, 19010810, 5108, 0);
        $InitializeCommonEvent(0, 90575160, 19010810, 19010811, 19010812);
        $InitializeCommonEvent(0, 90575162, 19010810, 19010811);
        $InitializeCommonEvent(0, 90575163, 19010810, 19010811);
        $InitializeCommonEvent(0, 90575164);
        $InitializeCommonEvent(0, 90575165, 19010810);
    }
    if (EventFlag(19000962)) {
        $InitializeCommonEvent(0, 90575900, 19015821);
        $InitializeCommonEvent(0, 90575901, 19010828, 752000, 907520002);
        $InitializeCommonEvent(0, 90575903, 19, 19015821, 19010827, 0);
        $InitializeCommonEvent(0, 90515012, 19015821, 7511);
        $InitializeCommonEvent(0, 90515020, 7511, 7512);
        $InitializeCommonEvent(0, 90575950, 752000, 19010828, 5106, 0);
        $InitializeCommonEvent(0, 90575250, 19015821, 19010825, 19010826, 19010827);
        $InitializeCommonEvent(0, 90575251, 19015821, 19010825, 19010826, 19010827, 19010828, 19002820, 19000220, 19000221, 19000222, 19000322);
        $InitializeCommonEvent(0, 90575257, 19010827, 19010828, 19010825, 19010826);
        $InitializeCommonEvent(0, 90575220, 19010825, 19000222);
        $InitializeCommonEvent(0, 90575212, 19010827, 19010825, 19010826, 19000220, 19000221, 19000222, 1);
        $InitializeCommonEvent(0, 90575266, 19010825, 1);
        $InitializeCommonEvent(0, 90575266, 19010826, 0);
    }
    if (EventFlag(19000962)) {
        if (IsPlayerNo(1)) {
            $InitializeCommonEvent(0, 90575230, 19010822, 10002, 1);
            $InitializeCommonEvent(0, 90575230, 19010823, 10003, 0);
            $InitializeCommonEvent(0, 90575230, 19010824, 10004, 0);
            $InitializeCommonEvent(0, 90575231, 19010822);
            $InitializeCommonEvent(0, 90575232, 19010822);
            $InitializeCommonEvent(0, 90575233, 19010822);
            $InitializeCommonEvent(0, 90575234, 19010822);
        }
        if (IsPlayerNo(2)) {
            $InitializeCommonEvent(0, 90575230, 19010822, 10002, 0);
            $InitializeCommonEvent(0, 90575230, 19010823, 10003, 1);
            $InitializeCommonEvent(0, 90575230, 19010824, 10004, 0);
            $InitializeCommonEvent(0, 90575231, 19010823);
            $InitializeCommonEvent(0, 90575232, 19010823);
            $InitializeCommonEvent(0, 90575233, 19010823);
            $InitializeCommonEvent(0, 90575234, 19010823);
        }
        if (IsPlayerNo(3)) {
            $InitializeCommonEvent(0, 90575230, 19010822, 10002, 0);
            $InitializeCommonEvent(0, 90575230, 19010823, 10003, 0);
            $InitializeCommonEvent(0, 90575230, 19010824, 10004, 1);
            $InitializeCommonEvent(0, 90575231, 19010824);
            $InitializeCommonEvent(0, 90575232, 19010824);
            $InitializeCommonEvent(0, 90575233, 19010824);
            $InitializeCommonEvent(0, 90575234, 19010824);
        }
    }
    if (EventFlag(19000962)) {
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006821, 19015821, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006822, 19015821, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006823, 19015821, 5108, 0);
        $InitializeCommonEvent(0, 90575240, 7511, 7512, 0, 19015821, 5108, 0);
        $InitializeCommonEvent(0, 90575255, 19010825, 19010826, 19010828, 19010827, 19002820, 19000322);
        $InitializeCommonEvent(0, 90575256, 19010825, 19010826, 19010828, 19010827, 19000322);
        $InitializeCommonEvent(0, 90575263, 19010828);
        $InitializeCommonEvent(0, 90575267, 19010825, 19010826, 19010828, 19000322, 19000323);
        $InitializeCommonEvent(0, 90575260, 19010825, 19010828, 47150, 47152, 19000322);
        $InitializeCommonEvent(0, 90575261, 19010825, 19010828, 47170, 47190, 19000322, 19000323);
        $InitializeCommonEvent(0, 90575262, 19010825, 19010828, 19010827, 47111, 47190, 19000322, 19000323);
        $InitializeCommonEvent(0, 90575264, 19010825, 19010828, 19000322);
        $InitializeCommonEvent(0, 90575265, 19010825, 19010828, 47111, 19000322);
        $InitializeCommonEvent(0, 90575260, 19010826, 19010828, 47151, 47153, 19000322);
        $InitializeCommonEvent(0, 90575261, 19010826, 19010828, 47171, 47191, 19000322, 19000323);
        $InitializeCommonEvent(0, 90575262, 19010826, 19010828, 19010827, 47116, 47191, 19000322, 19000323);
        $InitializeCommonEvent(0, 90575264, 19010826, 19010828, 19000322);
        $InitializeCommonEvent(0, 90575265, 19010826, 19010828, 47116, 19000322);
    }
    if (EventFlag(19000963)) {
        $InitializeCommonEvent(0, 90575900, 19010830);
        $InitializeCommonEvent(0, 90575901, 19010831, 754000, 907540000);
        $InitializeCommonEvent(0, 90575902, 19010830, 19010831, 0);
        $InitializeCommonEvent(0, 90515012, 19010830, 7511);
        $InitializeCommonEvent(0, 90515012, 19010831, 7511);
        $InitializeCommonEvent(0, 90515020, 7511, 7512);
        $InitializeCommonEvent(0, 90575350, 19010830, 19010831, 19010220, 19010221);
        $InitializeCommonEvent(0, 90575351, 19010830, 19015835, 19015836, 19000230);
        $InitializeCommonEvent(0, 90575352, 19010830, 19010831, 19000230);
        $InitializeCommonEvent(0, 90575330, 19010830);
        $InitializeCommonEvent(0, 90575950, 754000, 19010831, 5106, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006830, 19010830, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006831, 19010830, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006832, 19010830, 5108, 0);
        $InitializeCommonEvent(0, 90575340, 7511, 7512, 0, 19010831, 5108, 0);
        $InitializeCommonEvent(0, 90575360, 19010831, 45720, 10, NPCPartType.Part10, 1, 223, 12, 45721, 45740, 45725, 45730);
        $InitializeCommonEvent(0, 90575360, 19010831, 45720, 11, NPCPartType.Part11, 1, 224, 13, 45721, 45741, 45725, 45731);
        $InitializeCommonEvent(0, 90575360, 19010831, 45720, 12, NPCPartType.Part12, 1, 225, 14, 45721, 45742, 45725, 45732);
        $InitializeCommonEvent(0, 90575360, 19010831, 45720, 13, NPCPartType.Part13, 1, 226, 10, 45721, 45743, 45725, 45733);
        $InitializeCommonEvent(0, 90575360, 19010831, 45720, 14, NPCPartType.Part14, 1, 227, 11, 45721, 45744, 45725, 45734);
    }
    if (EventFlag(19000963)) {
        $InitializeCommonEvent(0, 90575310, 19010830, 19010200, 19010201, 19010202, 19010203, 19010204, 19010205, 19010206, 19010207, 19010208, 19010209, 19010210, 19010211, 19010212, 19010213, 19010214, 19010215, 19010216, 19010217, 19010218, 19010219);
        $InitializeCommonEvent(0, 90575311, 19010830, 19010200, 19010201, 19010202, 19010203, 19010204, 19010205, 19010206, 19010207, 19010208, 19010209, 19010210, 19010211, 19010212, 19010213, 19010214, 19010215, 19010216, 19010217, 19010218, 19010219);
        $InitializeCommonEvent(0, 90575312, 19010830, 19010200, 19010201, 19010202, 19010203, 19010204, 19010205, 19010206, 19010207, 19010208, 19010209, 19010210, 19010211, 19010212, 19010213, 19010214, 19010215, 19010216, 19010217);
        $InitializeCommonEvent(0, 90575313, 19010830, 19010220, 19010221, 19010222);
        $InitializeCommonEvent(0, 90575320, 19010830, 19015836);
    }
    if (EventFlag(19000963)) {
        $InitializeCommonEvent(0, 90575302, 19010830, 19010200);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010201);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010202);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010203);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010204);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010205);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010206);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010207);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010208);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010209);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010210);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010211);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010212);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010213);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010214);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010215);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010216);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010217);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010218);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010219);
    }
    if (EventFlag(19000963)) {
        $InitializeCommonEvent(0, 90575302, 19010830, 19010220);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010221);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010222);
    }
    if (EventFlag(19000963)) {
        $InitializeCommonEvent(0, 90575302, 19010830, 19010230);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010231);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010232);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010233);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010234);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010235);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010236);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010237);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010238);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010239);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010240);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010241);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010242);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010243);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010244);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010245);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010246);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010247);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010248);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010249);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010250);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010251);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010252);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010253);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010254);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010255);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010256);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010257);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010258);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010259);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010260);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010261);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010262);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010263);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010264);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010265);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010266);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010267);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010268);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010269);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010270);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010271);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010272);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010273);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010274);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010275);
        $InitializeCommonEvent(0, 90575302, 19010830, 19010276);
    }
    if (EventFlag(19000964)) {
        $InitializeCommonEvent(0, 90575450, 19010840, 19010849, 19010440, 19010441, 19010442, 19010443, 19010444, 19010445, 19010446, 19010447, 19015842, 19015843, 19015844);
        $InitializeCommonEvent(0, 90575401, 19010849, 19000240, 19000241, 19000242);
        $InitializeCommonEvent(0, 90575452, 19010849, 19010840, 19000240, 19000241, 19000242);
        $InitializeCommonEvent(0, 90575403, 19010849, 19004740, 19004741, 19004742, 19000240, 19000242);
        if (IsPlayerNo(1)) {
            $InitializeCommonEvent(0, 90575404, 19000240, 19004743, 19000243, 19004744, 19000246);
        }
        if (IsPlayerNo(2)) {
            $InitializeCommonEvent(0, 90575404, 19000240, 19004743, 19000244, 19004744, 19000247);
        }
        if (IsPlayerNo(3)) {
            $InitializeCommonEvent(0, 90575404, 19000240, 19004743, 19000245, 19004744, 19000248);
        }
        $InitializeCommonEvent(0, 90575405, 19000240, 19000241, 19000246, 19000247, 19000248);
        $InitializeCommonEvent(0, 99575406, 19010849, 19000240, 19000701, 19000241);
        $InitializeCommonEvent(0, 99575410, 19010840);
        $InitializeCommonEvent(0, 99575420, 19010840);
        $InitializeCommonEvent(0, 99575421, 19010840);
        $InitializeCommonEvent(0, 99575422, 19010840, 19002740, 19002741, 19002742, 19002743, 19002744, 19002745, 19002746, 19002747, 19010440, 19010441, 19010442, 19010443, 19010444, 19010445, 19010446, 19010447);
        $InitializeCommonEvent(0, 90575901, 19010840, 756000, 907550000);
        $InitializeCommonEvent(0, 90575902, 19015840, 0, 0);
        $InitializeCommonEvent(0, 90575902, 19015842, 19015843, 19015844);
        $InitializeCommonEvent(0, 90515012, 19015840, 7511);
        $InitializeCommonEvent(0, 90515022, 19015842, 7511);
        $InitializeCommonEvent(0, 90515022, 19015843, 7511);
        $InitializeCommonEvent(0, 90515022, 19015844, 7511);
        $InitializeCommonEvent(0, 90515020, 7511, 7512);
        $InitializeCommonEvent(0, 99575485, 19010840, 19000270);
        $InitializeCommonEvent(0, 99575486, 19010840);
        $InitializeCommonEvent(0, 90575950, 756000, 19010840, 5106, 0.5);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006840, 19010840, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006841, 19010840, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006842, 19010840, 5108, 0);
        $InitializeCommonEvent(0, 99575440, 7511, 7512, 0, 19010840, 5108, 0);
    }
    if (EventFlag(19000964)) {
        $InitializeCommonEvent(0, 90515012, 19015842, 7511);
        $InitializeCommonEvent(0, 99575466, 19010840, 10002, 19010450, 110, 19011250, 19000250, 19000260);
        $InitializeCommonEvent(0, 99575468, 19010840, 19010453, 113, 19011253, 19000250, 19000263);
        $InitializeCommonEvent(0, 99575467, 19010840, 19010450, 19000260);
        $InitializeCommonEvent(0, 99575467, 19010840, 19010453, 19000253);
        $InitializeCommonEvent(0, 90515012, 19015843, 7511);
        $InitializeCommonEvent(0, 99575466, 19010840, 10003, 19010451, 111, 19011251, 19000251, 19000261);
        $InitializeCommonEvent(0, 99575468, 19010840, 19010454, 114, 19011254, 19000251, 19000264);
        $InitializeCommonEvent(0, 99575467, 19010840, 19010451, 19000261);
        $InitializeCommonEvent(0, 99575467, 19010840, 19010454, 19000254);
        $InitializeCommonEvent(0, 90515012, 19015844, 7511);
        $InitializeCommonEvent(0, 99575466, 19010840, 10004, 19010452, 112, 19011252, 19000252, 19000262);
        $InitializeCommonEvent(0, 99575468, 19010840, 19010455, 115, 19011255, 19000252, 19000265);
        $InitializeCommonEvent(0, 99575467, 19010840, 19010452, 19000262);
        $InitializeCommonEvent(0, 99575467, 19010840, 19010455, 19000255);
        $InitializeCommonEvent(0, 99575471, 19010840, 19000250, 19000260, 19000251, 19000261, 19000252, 19000262);
        $InitializeCommonEvent(0, 99575470, 19010840, 49691, 8002);
    }
    if (EventFlag(19000964)) {
        $InitializeCommonEvent(0, 99575480, 19010840, 20000, 49690, 49702, 0, 49703, 1);
        $InitializeCommonEvent(0, 99575480, 19010840, 20000, 49690, 446, 0, 447, 1);
        if (!IsPlayerNo(1)) {
            $InitializeCommonEvent(0, 99575481, 19010840, 10002);
        }
        if (!IsPlayerNo(2)) {
            $InitializeCommonEvent(0, 99575481, 19010840, 10003);
        }
        if (!IsPlayerNo(3)) {
            $InitializeCommonEvent(0, 99575481, 19010840, 10004);
        }
        $InitializeCommonEvent(0, 99575470, 19010840, 49690, 8001);
    }
    if (EventFlag(19000964)) {
        $InitializeCommonEvent(0, 99575480, 19010840, 20000, 49692, 49720, 49721, 0, 0);
        $InitializeCommonEvent(0, 99575480, 19010840, 20000, 49692, 49723, 0, 49724, 1);
        $InitializeCommonEvent(0, 99575470, 19010840, 49692, 8003);
    }
    if (EventFlag(19000964)) {
        $InitializeCommonEvent(0, 99575480, 19010840, 20000, 49693, 49731, 0, 49733, 1);
        $InitializeCommonEvent(0, 99575480, 19010840, 19010450, 49693, 49731, 0, 49733, 1);
        $InitializeCommonEvent(0, 99575480, 19010840, 19010451, 49693, 49731, 0, 49733, 1);
        $InitializeCommonEvent(0, 99575480, 19010840, 19010452, 49693, 49731, 0, 49733, 1);
        $InitializeCommonEvent(0, 99575470, 19010840, 49693, 8004);
    }
    if (EventFlag(19000964)) {
        $InitializeCommonEvent(0, 99575480, 19010840, 20000, 49694, 49742, 0, 49747, 1);
        $InitializeCommonEvent(0, 99575480, 19010840, 20000, 49694, 49746, 0, 49748, 1);
        $InitializeCommonEvent(0, 99575480, 19010840, 19010450, 49694, 49741, 0, 49749, 1);
        $InitializeCommonEvent(0, 99575480, 19010840, 19010451, 49694, 49741, 0, 49749, 1);
        $InitializeCommonEvent(0, 99575480, 19010840, 19010452, 49694, 49741, 0, 49749, 1);
        $InitializeCommonEvent(0, 99575470, 19010840, 49694, 8005);
    }
    if (EventFlag(19000964)) {
        $InitializeCommonEvent(0, 99575483, 19010840);
        $InitializeCommonEvent(0, 99575470, 19010840, 49695, 8006);
        $InitializeCommonEvent(0, 99575482, 19010840);
    }
    if (EventFlag(19000965)) {
        $InitializeCommonEvent(0, 90575900, 19010850);
        $InitializeCommonEvent(0, 90575901, 19010850, 760000, 907610000);
        $InitializeCommonEvent(0, 90575902, 19010850, 0, 0);
        $InitializeCommonEvent(0, 90575500, 19010850);
        $InitializeCommonEvent(0, 90575950, 760000, 19010850, 5106, 0);
        $InitializeCommonEvent(0, 90575551, 19010850);
        $InitializeCommonEvent(0, 90575510, 19010850);
        $InitializeCommonEvent(0, 90515012, 19010850, 7511);
        $InitializeCommonEvent(0, 90515020, 7511, 7512);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006850, 19010850, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006851, 19010850, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006852, 19010850, 5108, 0);
        $InitializeCommonEvent(0, 90575520, 7511, 7512, 0, 19010850, 5108, 0);
    }
    if (EventFlag(19000966)) {
        $InitializeCommonEvent(0, 90575900, 19010860);
        $InitializeCommonEvent(0, 90575901, 19010860, 490000, 907620000);
        $InitializeCommonEvent(0, 90575902, 19010860, 0, 0);
        $InitializeCommonEvent(0, 90575600, 19010860, 19002860);
        $InitializeCommonEvent(0, 90575651, 19010860);
        $InitializeCommonEvent(0, 90515012, 19010860, 7511);
        $InitializeCommonEvent(0, 90515020, 7511, 7512);
        $InitializeCommonEvent(0, 90575610, 19010860);
        $InitializeCommonEvent(0, 90575660, 19010860, 51001, 51002, 51030, 15, 120, 10, NPCPartType.Part1, 11, NPCPartType.Part6, 0, NPCPartType.Part1, 0, NPCPartType.Part1, 0, NPCPartType.Part1);
        $InitializeCommonEvent(0, 90575660, 19010860, 51003, 51004, 51031, 16, 130, 20, NPCPartType.Part2, 21, NPCPartType.Part3, 22, NPCPartType.Part4, 23, NPCPartType.Part5, 24, NPCPartType.Part8);
        $InitializeCommonEvent(0, 90575660, 19010860, 51005, 51006, 51032, 17, 60, 30, NPCPartType.Part9, 31, NPCPartType.Part10, 32, NPCPartType.Part11, 33, NPCPartType.Part12, 0, NPCPartType.Part1);
        $InitializeCommonEvent(0, 90575660, 19010860, 51007, 51008, 51033, 18, 120, 40, NPCPartType.Part7, 0, NPCPartType.Part1, 0, NPCPartType.Part1, 0, NPCPartType.Part1, 0, NPCPartType.Part1);
        $InitializeCommonEvent(0, 90575652, 19010860, 5105, 5106);
        $InitializeCommonEvent(0, 90575950, 490000, 19010860, 5106, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006860, 19010860, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006861, 19010860, 5108, 0);
        $InitializeCommonEvent(0, 90575910, 7511, 7512, 19006862, 19010860, 5108, 0);
        $InitializeCommonEvent(0, 99575620, 7511, 7512, 0, 19010860, 5108, 0);
        $InitializeCommonEvent(0, 90575602, 19010860);
    }
    if (EventFlag(19000952)) {
        $InitializeEvent(0, 19002890);
        $InitializeEvent(0, 19002891);
        $InitializeEvent(0, 19002892);
    }
    $InitializeEvent(0, 19002500);
    $InitializeEvent(0, 19002501);
    $InitializeEvent(0, 19002550);
    $InitializeEvent(0, 19002502);
    RegisterBonfire(19001500, 0, 5);
    RegisterBonfire(19001501, 0, 5);
    $InitializeEvent(-1, 19009900);
});

$Event(50, Default, function() {
    $InitializeEvent(0, 19002470);
});

$Event(19002470, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(19002470));
    WaitFor(EventFlag(7510) && PlayerInMap(19, 0, 56, 0));
    FadeToBlack(1, 0, true, -1);
    WaitFixedTimeSeconds(2);
    FadeToBlack(0, 0.5, false, -1);
    EndEvent();
});

$Event(19002590, Default, function() {
    WaitFor(EventFlag(7512));
    DisplayTextEffectId(4000);
    WaitFixedTimeSeconds(15);
    SetEventFlagID(7000, ON);
});

$Event(19002500, Default, function() {
    WaitFor(EventFlag(1900));
    SetSpEffect(19000800, 41110);
});

$Event(19002501, Default, function() {
    WaitFor(EventFlag(1901));
    WaitFor(cond);
    SetSpEffect(19000800, 41100);
    SetNetworkconnectedEventFlagID(19002501, ON);
});

$Event(19002502, Default, function() {
    DisableCharacter(19000400);
    DisableCharacter(19000501);
    DisableAsset(19001501);
    WaitFor(EventFlag(1902));
    EnableCharacter(19000501);
    EnableAsset(19001501);
    WaitFor(EventFlag(19008501));
    SpawnOneshotSFX(TargetEntityType.Character, 19002501, -1, 600940);
    WaitFixedTimeSeconds(1.5);
    EnableCharacter(19000400);
    EndEvent();
});

$Event(19002550, Default, function() {
    DisableCharacter(19000500);
    DisableAsset(19001500);
    DisableObjAct(19001500, 90035);
    WaitFor(EventFlag(1902));
    SpawnOneshotSFX(TargetEntityType.Asset, 19001500, 200, 1000);
    SpawnOneshotSFX(TargetEntityType.Character, 19000800, -1, 1000);
    SetSpEffect(19000800, 41105);
});

$Event(19002890, Restart, function() {
    WaitFor(EventFlag(19002895));
    DisableCharacterAI(19000820);
    DisableCharacterAI(19000821);
    ForceAnimationPlayback(19000820, 20035, false, false, false);
    ForceAnimationPlayback(19000821, 20035, false, true, false);
    ForceAnimationPlayback(19000820, 30015, true, false, false);
    ForceAnimationPlayback(19000821, 30015, true, false, false);
    WaitFor(ElapsedSeconds(4));
    SetCharacterBackreadState(19000828, false);
    WarpCharacterAndCopyFloorUnknown200489(19000828, TargetEntityType.Character, 19000821, 220, 0, -1, -1);
    WaitFor(ElapsedFrames(1));
    ForceAnimationPlayback(19000828, 20010, true, true, false);
    WaitFor(ElapsedSeconds(12));
    ForceAnimationPlayback(19000820, 20036, false, false, false);
    ForceAnimationPlayback(19000821, 20036, false, false, false);
    EnableCharacterAI(19000820);
    EnableCharacterAI(19000821);
});

$Event(19002891, Restart, function() {
    WaitFor(EventFlag(19002896));
    DisableCharacterAI(19000820);
    DisableCharacterAI(19000821);
    ForceAnimationPlayback(19000820, 20035, false, false, false);
    ForceAnimationPlayback(19000821, 20035, false, true, false);
    ForceAnimationPlayback(19000820, 30015, true, false, false);
    ForceAnimationPlayback(19000821, 30015, true, false, false);
    ForceAnimationPlayback(19000828, 20011, false, true, false);
    SetCharacterBackreadState(19000828, false);
    WarpCharacterAndCopyFloorUnknown200489(19000828, TargetEntityType.Character, 19000821, 220, 0, -1, -1);
    WaitFor(ElapsedFrames(1));
    ForceAnimationPlayback(19000828, 20012, false, true, false);
    WarpCharacterAndCopyFloorUnknown200489(19000828, TargetEntityType.Character, 19000821, 220, 0, -1, -1);
    WaitFor(ElapsedFrames(1));
    ForceAnimationPlayback(19000828, 20013, false, true, false);
    ForceAnimationPlayback(19000828, 20013, true, false, false);
    ForceAnimationPlayback(19000821, 30015, true, false, false);
    WaitFor(ElapsedSeconds(8));
    ForceAnimationPlayback(19000828, 20015, false, false, false);
    ForceAnimationPlayback(19000821, 20036, false, false, false);
    EnableCharacterAI(19000820);
    EnableCharacterAI(19000821);
});

$Event(19002892, Restart, function() {
    WaitFor(EventFlag(19002897));
    DisableCharacterAI(19000820);
    DisableCharacterAI(19000821);
    ForceAnimationPlayback(19000820, 20035, false, false, false);
    ForceAnimationPlayback(19000821, 20035, false, true, false);
    ForceAnimationPlayback(19000820, 30015, true, false, false);
    ForceAnimationPlayback(19000821, 30015, true, false, false);
    ForceAnimationPlayback(19000828, 20011, false, true, false);
    SetCharacterBackreadState(19000828, false);
    WarpCharacterAndCopyFloorUnknown200489(19000828, TargetEntityType.Character, 19000820, 220, 0, -1, -1);
    WaitFor(ElapsedFrames(1));
    ForceAnimationPlayback(19000828, 20012, false, true, false);
    WarpCharacterAndCopyFloorUnknown200489(19000828, TargetEntityType.Character, 19000820, 220, 0, -1, -1);
    WaitFor(ElapsedFrames(1));
    ForceAnimationPlayback(19000828, 20013, false, true, false);
    ForceAnimationPlayback(19000828, 20013, true, false, false);
    ForceAnimationPlayback(19000820, 30015, true, false, false);
    WaitFor(ElapsedSeconds(8));
    ForceAnimationPlayback(19000828, 20015, false, false, false);
    ForceAnimationPlayback(19000820, 20036, false, false, false);
    EnableCharacterAI(19000820);
    EnableCharacterAI(19000821);
});

$Event(19009900, Default, function() {
    WaitFor(!CharacterHasSpEffect(10000, 6999500));
    SetSpEffect(10000, 6999500);
    RestartEvent();
});

$Event(90575900, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(7511));
    WaitFor(
        InArea(10000, 19002801)
            || HasDamageType(chrEntityId, 0, DamageType.Any)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || EventFlag(7511));
    SetNetworkconnectedEventFlagID(7511, ON);
});

$Event(90575901, Restart, function(chrEntityId, bgmBossConvParamId, logObjectId) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(18002800));
    WaitFor(HPRatio(chrEntityId) == 0);
    EndIf(EventFlag(7516));
    SetSpEffect(10000, 509);
    SetSpEffect(10001, 509);
    SetSpEffect(10002, 509);
    SetSpEffect(10003, 509);
    SetSpEffect(10004, 509);
    SetSpEffect(10005, 509);
    SetSpEffect(10006, 509);
    SetSpEffect(10007, 509);
    SetSpEffect(10008, 509);
    SetSpEffect(10009, 509);
    SetSpEffect(10010, 509);
    EnableCharacterImmortality(20000);
    SetNetworkconnectedEventFlagID(7513, ON);
    WaitFixedTimeSeconds(5);
    PlaySE(chrEntityId, SoundType.SFX, 888880000);
    RecordUserDispLog(10111, 10000, LogObjectType.NpcName, logObjectId);
    if (PlayerInMap(16, 0, 0, 0)) {
        DisplayTextEffectId(1052);
    }
    if (PlayerInMap(16, 10, 0, 0)) {
        DisplayTextEffectId(1053);
    }
    if (PlayerInMap(18, 0, 0, 0)) {
        DisplayTextEffectId(1040);
    }
    if (PlayerInMap(19, 0, 56, 0)) {
        DisplayTextEffectId(1051);
    }
    if (BossBGMPlaying(bgmBossConvParamId)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    }
    IncrementTeamBossesKilled(1);
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 0);
    SetNetworkconnectedEventFlagID(7512, ON);
    WaitFixedTimeSeconds(0.1);
    SetSpEffect(20000, 102121);
});

$Event(90575902, Restart, function(chrEntityId, chrEntityId2, chrEntityId3) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EndIf(EventFlag(18002800));
    if (!PlayerIsInOwnWorld()) {
        if (chrEntityId != 0) {
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Normal);
        }
        if (chrEntityId2 != 0) {
            SetNetworkUpdateAuthority(chrEntityId2, AuthorityLevel.Normal);
        }
        if (chrEntityId3 != 0) {
            SetNetworkUpdateAuthority(chrEntityId3, AuthorityLevel.Normal);
        }
    }
    WaitFor(PlayerIsInOwnWorld());
    if (PlayerIsInOwnWorld()) {
        if (chrEntityId != 0) {
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
        }
        if (chrEntityId2 != 0) {
            SetNetworkUpdateAuthority(chrEntityId2, AuthorityLevel.Forced);
        }
        if (chrEntityId3 != 0) {
            SetNetworkUpdateAuthority(chrEntityId3, AuthorityLevel.Forced);
        }
    }
    WaitFor(!PlayerIsInOwnWorld());
    RestartEvent();
});

$Event(90515012, Default, function(chrEntityId, eventFlagId) {
    EndIf(CharacterHasSpEffect(chrEntityId, 7999, NotEqual, 0));
    WaitFor(EventFlag(eventFlagId));
    ActivateMultiplayerdependantBuffs(chrEntityId);
    SetSpEffect(chrEntityId, 7999);
});

$Event(90515020, Default, function(eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    if (!EventFlag(eventFlagId)) {
        WaitFor(EventFlag(eventFlagId));
        SetNetworkconnectedEventFlagID(7530, ON);
    }
L0:
    WaitFor(EventFlag(eventFlagId2));
    SetNetworkconnectedEventFlagID(7530, OFF);
});

$Event(90575000, Restart, function(chrEntityId, chrEntityId2) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId2);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    CreateReferredDamagePair(chrEntityId2, chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId2);
    WaitFor(PlayerInMap(19, 0, 56, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(-1);
});

$Event(90575001, Restart, function(chrEntityId, chrEntityId2) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId);
        EnableCharacterAI(chrEntityId2);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907500000);
        LinkToBossHealthBar(Disabled, 907500000, 0);
        LinkToBossHealthBar(Enabled, 907500000, chrEntityId);
        LinkToBossHealthBar(Enabled, 907500000, chrEntityId2);
        SetBossBGM(750000, BossBGMState.Start);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    ForceAnimationPlayback(chrEntityId2, 30000, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(750000, BossBGMState.Start);
    ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
    EnableCharacterAI(chrEntityId);
    EnableCharacterAI(chrEntityId2);
    LinkToBossHealthBar(Disabled, 907500000, 0);
    LinkToBossHealthBar(Enabled, 907500000, chrEntityId);
    LinkToBossHealthBar(Enabled, 907500000, chrEntityId2);
    WaitFor(ElapsedSeconds(3));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907500000);
});

$Event(90575002, Restart, function(chrEntityId, chrEntityId2, chrEntityId3) {
    EndIf(EventFlag(7512));
    WaitFor(HPRatio(chrEntityId) <= 0);
    if (CharacterHasSpEffect(chrEntityId2, 42035)) {
        DisableCharacter(chrEntityId2);
    }
    ForceCharacterDeath(chrEntityId2, false);
    if (CharacterHasSpEffect(chrEntityId3, 42035)) {
        DisableCharacter(chrEntityId3);
    }
    ForceCharacterDeath(chrEntityId3, false);
});

$Event(90575005, Restart, function(chrEntityId, chrEntityId2, dummypolyId, spEffectId) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(chrEntityId, 42030));
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId, dummypolyId, chrEntityId, -1, -1);
    SetSpEffect(chrEntityId2, spEffectId);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 42030));
    RestartEvent();
});

$Event(90575006, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(chrEntityId, 42031));
    SetSpEffect(chrEntityId2, 42039);
    WaitFixedTimeSeconds(1);
    SetSpEffect(chrEntityId2, 5950);
    WaitFixedTimeSeconds(5);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 42031));
    RestartEvent();
});

$Event(90515008, Restart, function(eventFlagId, eventFlagId2, bgmBossConvParamId, chrEntityId, spEffectId, targetAmount) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId2));
    if (eventFlagId != 0) {
        WaitFor(EventFlag(eventFlagId));
    }
    if (Signed(0) != spEffectId) {
        spHp |= CharacterHasSpEffect(chrEntityId, spEffectId, GreaterOrEqual, 1);
    } else {
        spHp |= CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount;
    }
    WaitFor((spHp && BossBGMPlaying(bgmBossConvParamId)) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    SetBossBGM(bgmBossConvParamId, BossBGMState.HeatUp);
    WaitFor(!BossBGMPlaying(bgmBossConvParamId) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    RestartEvent();
});

$Event(90575910, Restart, function(eventFlagId, eventFlagId2, assetEntityId, chrEntityId, spEffectId, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            flagSpHp &= EventFlag(eventFlagId);
        }
        if (Signed(0) != spEffectId) {
            flagSpHp &= CharacterHasSpEffect(chrEntityId, spEffectId, GreaterOrEqual, 1);
        } else {
            flagSpHp &= CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount;
        }
    }
    if (flagSpHp) {
        ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 0);
        EndEvent();
    }
    if (eventFlagId != 0) {
        WaitFor(EventFlag(eventFlagId));
    }
    if (Signed(0) != spEffectId) {
        WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId, GreaterOrEqual, 1));
    } else {
        WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
    }
    ChangeAssetEnableStateUnknown200510(assetEntityId, Enabled, 5);
});

$Event(90575008, Restart, function(eventFlagId, eventFlagId2, spEffectId, chrEntityId, spEffectId2, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        if (Signed(0) != spEffectId2) {
            WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2, GreaterOrEqual, 1));
        } else {
            WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
        }
    }
    ChangeWeather(Weather.Type10, -1, false);
    WaitFor(PlayerInMap(19, 0, 56, 0));
    SpawnMapSFX(19002400);
    SpawnMapSFX(19002401);
    SpawnMapSFX(19002402);
    SpawnMapSFX(19002403);
    SpawnMapSFX(19002404);
    SpawnMapSFX(19002405);
    SpawnMapSFX(19002406);
    SpawnMapSFX(19002407);
    SpawnMapSFX(19002408);
    SpawnMapSFX(19002409);
    SpawnMapSFX(19002410);
    SpawnMapSFX(19002411);
    SpawnMapSFX(19002412);
    SpawnMapSFX(19002413);
    SpawnMapSFX(19002414);
    SpawnMapSFX(19002415);
    SpawnMapSFX(19002416);
    SpawnMapSFX(19002417);
    SpawnMapSFX(19002418);
    SpawnMapSFX(19002419);
    SpawnMapSFX(19002420);
    SpawnMapSFX(19002421);
    SpawnMapSFX(19002422);
    SpawnMapSFX(19002423);
    SpawnMapSFX(19002424);
    SpawnMapSFX(19002425);
    SpawnMapSFX(19002426);
    SpawnMapSFX(19002427);
    SpawnMapSFX(19002428);
    SpawnMapSFX(19002429);
    SpawnMapSFX(19002430);
    SpawnMapSFX(19002431);
    SpawnMapSFX(19002432);
    SpawnMapSFX(19002433);
    SpawnMapSFX(19002434);
    SpawnMapSFX(19002435);
    SpawnMapSFX(19002436);
    SpawnMapSFX(19002437);
    SpawnMapSFX(19002438);
    SpawnMapSFX(19002439);
    SpawnMapSFX(19002440);
    SpawnMapSFX(19002441);
    SpawnMapSFX(19002442);
    SpawnMapSFX(19002443);
    SpawnMapSFX(19002444);
    SpawnMapSFX(19002445);
    SpawnMapSFX(19002446);
    SpawnMapSFX(19002447);
    SpawnMapSFX(19002448);
    SpawnMapSFX(19002449);
    SpawnMapSFX(19002450);
    SpawnMapSFX(19002451);
    SpawnMapSFX(19002452);
    SpawnMapSFX(19002453);
    SpawnMapSFX(19002454);
    SpawnMapSFX(19002455);
    SpawnMapSFX(19002456);
    SpawnMapSFX(19002457);
    SpawnMapSFX(19002458);
    SpawnMapSFX(19002459);
    SpawnMapSFX(19002460);
    SpawnMapSFX(19002461);
    SpawnMapSFX(19002462);
    SpawnMapSFX(19002463);
    SpawnMapSFX(19002464);
    SpawnMapSFX(19002465);
    SpawnMapSFX(19002466);
    SpawnMapSFX(19002467);
    SpawnMapSFX(19002468);
    SpawnMapSFX(19002469);
    SpawnMapSFX(19002470);
    SetSpEffect(0, spEffectId);
});

$Event(90565920, Restart, function(chrEntityId, spEffectId) {
    if (EventFlag(7535)) {
        cond &= TargetingBoss(TargetBoss.Gladius);
    }
    cond &= !IsCampaignSession() && !IsPlayMode(2);
    if (cond) {
        SetSpEffect(chrEntityId, spEffectId);
    }
});

$Event(90575100, Default, function(chrEntityId) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    WaitFor(PlayerInMap(19, 0, 56, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(7510);
});

$Event(90575101, Restart, function(chrEntityId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907510000);
        LinkToBossHealthBar(Disabled, 907510000, 0);
        LinkToBossHealthBar(Enabled, 907510000, chrEntityId);
        SetBossBGM(751000, BossBGMState.Start);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(751000, BossBGMState.Start);
    ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
    EnableCharacterAI(chrEntityId);
    LinkToBossHealthBar(Disabled, 907510000, 0);
    LinkToBossHealthBar(Enabled, 907510000, chrEntityId);
    WaitFor(ElapsedSeconds(3));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907510000);
});

$Event(90575102, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    WaitFor(HPRatio(chrEntityId) <= 0);
});

$Event(90575150, Restart, function(eventFlagId, eventFlagId2, spEffectId, chrEntityId, spEffectId2, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        if (Signed(0) != spEffectId2) {
            WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2, GreaterOrEqual, 1));
        } else {
            WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
        }
    }
    ChangeWeather(Weather.Type60, -1, false);
    SpawnMapSFX(19012400);
    SpawnMapSFX(19012401);
    SpawnMapSFX(19012402);
    SpawnMapSFX(19012403);
    SpawnMapSFX(19012404);
    SpawnMapSFX(19012405);
    SpawnMapSFX(19012406);
    SetSpEffect(0, spEffectId);
});

$Event(90575200, Restart, function(chrEntityId, chrEntityId2) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId2);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    EnableCharacterImmortality(chrEntityId);
    CreateReferredDamagePair(chrEntityId, chrEntityId2);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    DisableLockOnPoint(chrEntityId2, 220);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId2);
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    WaitFor(PlayerInMap(19, 0, 56, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(7539);
});

$Event(90575201, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, eventFlagId, eventFlagId2, eventFlagId3) {
    if (EventFlag(7512)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        DisableCharacterAI(chrEntityId);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterCollision(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        EnableCharacter(chrEntityId3);
        EnableCharacterCollision(chrEntityId3);
        EnableCharacterAI(chrEntityId3);
        DisableCharacter(chrEntityId4);
        DisableCharacterCollision(chrEntityId4);
        DisableCharacterAI(chrEntityId4);
        if (EventFlag(eventFlagId)) {
            DisableCharacter(chrEntityId3);
            DisableCharacterCollision(chrEntityId3);
            DisableCharacterAI(chrEntityId3);
        }
        if (EventFlag(eventFlagId2)) {
            DisableCharacter(chrEntityId2);
            DisableCharacterCollision(chrEntityId2);
            DisableCharacterAI(chrEntityId2);
        }
        if (EventFlag(eventFlagId3)) {
            EnableCharacter(chrEntityId4);
            EnableCharacterCollision(chrEntityId4);
            EnableCharacterAI(chrEntityId4);
            EnableCharacter(chrEntityId5);
            EnableCharacterCollision(chrEntityId5);
            EnableCharacterAI(chrEntityId5);
        }
        DisplayBossHealthBar(Enabled, chrEntityId6, 0, 907520000);
        LinkToBossHealthBar(Disabled, 907520000, 0);
        LinkToBossHealthBar(Enabled, 907520000, chrEntityId);
        SetBossBGM(752000, BossBGMState.Start);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId4);
    DisableCharacterCollision(chrEntityId4);
    DisableCharacterAI(chrEntityId4);
    SetSpEffect(chrEntityId4, 45918);
    EnableCharacter(chrEntityId2);
    EnableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(chrEntityId2, 30029, true, false, false);
    EnableCharacter(chrEntityId3);
    EnableCharacterCollision(chrEntityId3);
    DisableCharacterAI(chrEntityId3);
    ForceAnimationPlayback(chrEntityId3, 30029, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(752000, BossBGMState.Start);
    EnableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(chrEntityId2, 20029, false, false, false);
    EnableCharacterAI(chrEntityId3);
    ForceAnimationPlayback(chrEntityId3, 20029, false, true, false);
    DisplayBossHealthBar(Enabled, chrEntityId6, 0, 907520000);
    LinkToBossHealthBar(Disabled, 907520000, 0);
    LinkToBossHealthBar(Enabled, 907520000, chrEntityId);
});

$Event(90575202, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, eventFlagId) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHPValue(chrEntityId) == 0);
    DisableCharacterImmortality(chrEntityId2);
    DisableCharacterImmortality(chrEntityId3);
    DisableCharacterImmortality(chrEntityId4);
    DisableCharacterImmortality(chrEntityId5);
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId2);
        DisableCharacter(chrEntityId3);
    }
    ForceCharacterDeath(chrEntityId2, false);
    ForceCharacterDeath(chrEntityId3, false);
    if (!EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId4);
        DisableCharacter(chrEntityId5);
    }
    ForceCharacterDeath(chrEntityId4, false);
    ForceCharacterDeath(chrEntityId5, false);
});

$Event(99575205, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(7512));
    WaitFor(
        (CharacterHasSpEffect(chrEntityId, 45911) && CharacterHasSpEffect(chrEntityId2, 45989))
            || EventFlag(7512));
    EndIf(EventFlag(7512));
    SetSpEffect(chrEntityId, 45916);
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 45911)
            || !CharacterHasSpEffect(chrEntityId2, 45989)
            || EventFlag(7512));
    RestartEvent();
});

$Event(90575220, Restart, function(chrEntityId, eventFlagId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 45941));
    CreateNPCPart(chrEntityId, 70, NPCPartType.Part2, 100, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, 70, 175, 175, 139, 139, 0);
    WaitFor(NPCPartHP(chrEntityId, 70) <= 1 || !CharacterHasSpEffect(chrEntityId, 45941));
    if (CharacterHasSpEffect(chrEntityId, 45941)) {
        SetSpEffect(chrEntityId, 45943);
    }
    WaitFor(!CharacterHasSpEffect(chrEntityId, 45941));
    RestartEvent();
});

$Event(90575210, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId) <= 0.6 || CharacterHasSpEffect(chrEntityId2, 45956));
    if (!CharacterHasSpEffect(chrEntityId2, 45956)) {
        SetSpEffect(chrEntityId2, 45955);
    }
    WaitFor(CharacterHasSpEffect(chrEntityId2, 45956));
    WaitFixedTimeSeconds(1);
    DisableCharacter(chrEntityId2);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90575211, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId2, 45956));
    SetSpEffect(chrEntityId, 45905);
    WaitFor(CharacterHasSpEffect(chrEntityId, 45903));
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterAI(chrEntityId);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

$Event(90575212, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, eventFlagId, eventFlagId2, eventFlagId3, value) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(eventFlagId3));
    WaitFor(EventFlag(eventFlagId) && EventFlag(eventFlagId2));
    SetSpEffect(chrEntityId2, 45918);
    SetSpEffect(chrEntityId2, 45944);
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    EnableCharacter(chrEntityId3);
    EnableCharacterAI(chrEntityId3);
    WaitFor(ElapsedFrames(3));
    if (value != 1) {
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 530, chrEntityId);
        WarpCharacterAndCopyFloor(chrEntityId3, TargetEntityType.Character, chrEntityId, 530, chrEntityId);
    }
    if (value == 1) {
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId, 900, chrEntityId, 2, 5);
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId3, TargetEntityType.Character, chrEntityId, 900, chrEntityId, 2, 5);
    }
    EnableCharacterCollision(chrEntityId2);
    EnableCharacterCollision(chrEntityId3);
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    WaitFixedTimeFrames(5);
});

$Event(90575230, Restart, function(chrEntityId, chrEntityId2, value) {
    DisableNetworkSync();
    EnableCharacterImmortality(chrEntityId);
    DisableCharacterGravity(chrEntityId);
    if (value != 0) {
        SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
    }
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableLockOnPoint(chrEntityId, 220);
    SetCharacterTeamType(chrEntityId, TeamType.Disabled);
    ResetCharacterPosition(chrEntityId);
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 46009) && !CharacterHasSpEffect(chrEntityId2, 707115));
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    EnableLockOnPoint(chrEntityId, 220);
    if (value == 1) {
        SetCharacterTeamType(chrEntityId, TeamType.Unknown79);
    }
    if (value != 1) {
        EnableCharacterHPBarDisplay(chrEntityId);
        SetCharacterTeamType(chrEntityId, TeamType.ArchEnemyTeam);
    }
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 46009) || CharacterHasSpEffect(chrEntityId2, 707115));
    RestartEvent();
});

$Event(90575231, Restart, function(chrEntityId) {
    DisableNetworkSync();
    WaitFor(
        CharacterHasSpEffect(20000, 46000)
            || CharacterHasSpEffect(20000, 46001)
            || CharacterHasSpEffect(20000, 46002)
            || CharacterHasSpEffect(20000, 46003)
            || CharacterHasSpEffect(20000, 46004)
            || CharacterHasSpEffect(20000, 46005));
    SetSpEffect(chrEntityId, 46009);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 46009));
    RestartEvent();
});

$Event(90575232, Restart, function(chrEntityId) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(chrEntityId, 46009));
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Character, 20000, 36);
    RestartEvent();
});

$Event(90575233, Restart, function(chrEntityId) {
    DisableNetworkSync();
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 46009)
            && ((!CharacterHasSpEffect(20000, 46007) && !CharacterHasStateInfo(20000, 2))
                || CharacterHPValue(chrEntityId) <= 1
                || CharacterHasSpEffect(20000, 46045)
                || CharacterHPValue(20000) == 0));
    SetSpEffect(20000, 46041);
    SetSpEffect(20000, 46043);
    SetSpEffect(chrEntityId, 46042);
    SetSpEffect(chrEntityId, 46048);
    WaitFor(ElapsedFrames(1));
    SetSpEffect(chrEntityId, 10596);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 46009));
    RestartEvent();
});

$Event(90575234, Restart, function(chrEntityId) {
    DisableNetworkSync();
    WaitFor(CharacterHasSpEffect(20000, 46007));
    SetSpEffect(chrEntityId, 46047);
    WaitFor(!CharacterHasSpEffect(20000, 46007));
    RestartEvent();
});

$Event(90575240, Restart, function(eventFlagId, eventFlagId2, spEffectId, chrEntityId, spEffectId2, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        if (Signed(0) != spEffectId2) {
            WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2, GreaterOrEqual, 1));
        } else {
            WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
        }
    }
    ChangeWeather(Weather.Type20, -1, false);
    SpawnMapSFX(0);
    SetSpEffect(0, spEffectId);
});

$Event(90575300, Restart, function(chrEntityId, chrEntityId2, chrEntityId3) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId2);
    EnableCharacterDefaultBackread(chrEntityId3);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    PlaySE(chrEntityId, SoundType.CharacterMotion, 754009500);
});

$Event(90575301, Restart, function(chrEntityId, chrEntityId2, chrEntityId3) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        ForceCharacterDeath(chrEntityId3, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacter(chrEntityId3);
        EnableCharacterAI(chrEntityId);
        EnableCharacterAI(chrEntityId3);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907540000);
        LinkToBossHealthBar(Disabled, 907540000, 0);
        LinkToBossHealthBar(Enabled, 907540000, chrEntityId);
        LinkToBossHealthBar(Enabled, 907540000, chrEntityId2);
        LinkToBossHealthBar(Enabled, 907540000, chrEntityId3);
        SetBossBGM(754000, BossBGMState.Start);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId3);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId3);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    ForceAnimationPlayback(chrEntityId2, 30005, true, false, false);
    ForceAnimationPlayback(chrEntityId3, 30005, true, false, false);
    WaitFor(EventFlag(7510) || PlayerInMap(19, 0, 56, 0));
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId3);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId3);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    ForceAnimationPlayback(chrEntityId2, 30005, true, false, false);
    ForceAnimationPlayback(chrEntityId3, 30005, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(754000, BossBGMState.Start);
    ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
    EnableCharacterAI(chrEntityId);
    EnableCharacter(chrEntityId3);
    EnableCharacterAI(chrEntityId3);
    SetCharacterEventTarget(chrEntityId2, chrEntityId);
    SetCharacterEventTarget(chrEntityId3, chrEntityId);
    LinkToBossHealthBar(Disabled, 907540000, 0);
    LinkToBossHealthBar(Enabled, 907540000, chrEntityId);
    LinkToBossHealthBar(Enabled, 907540000, chrEntityId2);
    LinkToBossHealthBar(Enabled, 907540000, chrEntityId3);
    WaitFor(ElapsedSeconds(4));
    if (CharacterHasSpEffect(chrEntityId, 5080)) {
        ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
        WaitFor(ElapsedSeconds(4));
    }
    if (CharacterHasSpEffect(chrEntityId, 5080)) {
        ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
        WaitFor(ElapsedSeconds(4));
    }
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907540000);
    WaitFor(ElapsedSeconds(4));
    if (CharacterHasSpEffect(chrEntityId, 5080)) {
        ForceAnimationPlayback(chrEntityId, 20027, false, false, false);
        WaitFor(ElapsedSeconds(4));
    }
    if (CharacterHasSpEffect(chrEntityId, 5080)) {
        ForceAnimationPlayback(chrEntityId, 20027, false, false, false);
        WaitFor(ElapsedSeconds(4));
    }
});

$Event(90575310, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9, chrEntityId10, chrEntityId11, chrEntityId12, chrEntityId13, chrEntityId14, chrEntityId15, chrEntityId16, chrEntityId17, chrEntityId18, chrEntityId19, chrEntityId20, chrEntityId21) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 45610) || EventFlag(7512));
    EndIf(EventFlag(7512));
    if (CharacterHasSpEffect(chrEntityId2, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId2, 5906);
    } else if (CharacterHasSpEffect(chrEntityId3, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId3, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId3, 5906);
    } else if (CharacterHasSpEffect(chrEntityId4, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId4, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId4, 5906);
    } else if (CharacterHasSpEffect(chrEntityId5, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId5, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId5, 5906);
    } else if (CharacterHasSpEffect(chrEntityId6, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId6, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId6, 5906);
    } else if (CharacterHasSpEffect(chrEntityId7, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId7, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId7, 5906);
    } else if (CharacterHasSpEffect(chrEntityId8, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId8, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId8, 5906);
    } else if (CharacterHasSpEffect(chrEntityId9, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId9, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId9, 5906);
    } else if (CharacterHasSpEffect(chrEntityId10, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId10, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId10, 5906);
    } else if (CharacterHasSpEffect(chrEntityId11, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId11, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId11, 5906);
    } else if (CharacterHasSpEffect(chrEntityId12, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId12, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId12, 5906);
    } else if (CharacterHasSpEffect(chrEntityId13, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId13, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId13, 5906);
    } else if (CharacterHasSpEffect(chrEntityId14, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId14, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId14, 5906);
    } else if (CharacterHasSpEffect(chrEntityId15, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId15, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId15, 5906);
    } else if (CharacterHasSpEffect(chrEntityId16, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId16, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId16, 5906);
    } else if (CharacterHasSpEffect(chrEntityId17, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId17, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId17, 5906);
    } else if (CharacterHasSpEffect(chrEntityId18, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId18, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId18, 5906);
    } else if (CharacterHasSpEffect(chrEntityId19, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId19, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId19, 5906);
    } else if (CharacterHasSpEffect(chrEntityId20, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId20, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId20, 5906);
    } else if (CharacterHasSpEffect(chrEntityId21, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId21, TargetEntityType.Character, chrEntityId, 23, chrEntityId);
        SetSpEffect(chrEntityId21, 5906);
        Goto(L0);
    }
L0:
    WaitFor(ElapsedSeconds(0.1));
    RestartEvent();
});

$Event(90575311, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9, chrEntityId10, chrEntityId11, chrEntityId12, chrEntityId13, chrEntityId14, chrEntityId15, chrEntityId16, chrEntityId17, chrEntityId18, chrEntityId19, chrEntityId20, chrEntityId21) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 45613) || EventFlag(7512));
    EndIf(EventFlag(7512));
    if (CharacterHasSpEffect(chrEntityId2, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId2, 5905);
    } else if (CharacterHasSpEffect(chrEntityId3, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId3, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId3, 5905);
    } else if (CharacterHasSpEffect(chrEntityId4, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId4, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId4, 5905);
    } else if (CharacterHasSpEffect(chrEntityId5, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId5, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId5, 5905);
    } else if (CharacterHasSpEffect(chrEntityId6, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId6, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId6, 5905);
    } else if (CharacterHasSpEffect(chrEntityId7, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId7, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId7, 5905);
    } else if (CharacterHasSpEffect(chrEntityId8, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId8, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId8, 5905);
    } else if (CharacterHasSpEffect(chrEntityId9, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId9, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId9, 5905);
    } else if (CharacterHasSpEffect(chrEntityId10, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId10, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId10, 5905);
    } else if (CharacterHasSpEffect(chrEntityId11, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId11, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId11, 5905);
    } else if (CharacterHasSpEffect(chrEntityId12, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId12, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId12, 5905);
    } else if (CharacterHasSpEffect(chrEntityId13, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId13, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId13, 5905);
    } else if (CharacterHasSpEffect(chrEntityId14, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId14, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId14, 5905);
    } else if (CharacterHasSpEffect(chrEntityId15, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId15, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId15, 5905);
    } else if (CharacterHasSpEffect(chrEntityId16, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId16, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId16, 5905);
    } else if (CharacterHasSpEffect(chrEntityId17, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId17, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId17, 5905);
    } else if (CharacterHasSpEffect(chrEntityId18, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId18, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId18, 5905);
    } else if (CharacterHasSpEffect(chrEntityId19, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId19, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId19, 5905);
    } else if (CharacterHasSpEffect(chrEntityId20, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId20, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId20, 5905);
    } else if (CharacterHasSpEffect(chrEntityId21, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId21, TargetEntityType.Character, chrEntityId, 221, chrEntityId);
        SetSpEffect(chrEntityId21, 5905);
        Goto(L0);
    }
L0:
    WaitFor(ElapsedSeconds(0.1));
    RestartEvent();
});

$Event(90575312, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9, chrEntityId10, chrEntityId11, chrEntityId12, chrEntityId13, chrEntityId14, chrEntityId15, chrEntityId16, chrEntityId17, chrEntityId18, chrEntityId19) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 45612) || EventFlag(7512));
    EndIf(EventFlag(7512));
    if (CharacterHasSpEffect(chrEntityId2, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 30, chrEntityId);
        SetSpEffect(chrEntityId2, 5906);
    } else if (CharacterHasSpEffect(chrEntityId8, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId8, TargetEntityType.Character, chrEntityId, 30, chrEntityId);
        SetSpEffect(chrEntityId8, 5906);
    } else if (CharacterHasSpEffect(chrEntityId14, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId14, TargetEntityType.Character, chrEntityId, 30, chrEntityId);
        SetSpEffect(chrEntityId14, 5906);
        Goto(L0);
    }
L0:
    if (CharacterHasSpEffect(chrEntityId3, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId3, TargetEntityType.Character, chrEntityId, 31, chrEntityId);
        SetSpEffect(chrEntityId3, 5906);
    } else if (CharacterHasSpEffect(chrEntityId9, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId9, TargetEntityType.Character, chrEntityId, 31, chrEntityId);
        SetSpEffect(chrEntityId9, 5906);
    } else if (CharacterHasSpEffect(chrEntityId15, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId15, TargetEntityType.Character, chrEntityId, 31, chrEntityId);
        SetSpEffect(chrEntityId15, 5906);
        Goto(L1);
    }
L1:
    if (CharacterHasSpEffect(chrEntityId4, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId4, TargetEntityType.Character, chrEntityId, 32, chrEntityId);
        SetSpEffect(chrEntityId4, 5906);
    } else if (CharacterHasSpEffect(chrEntityId10, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId10, TargetEntityType.Character, chrEntityId, 32, chrEntityId);
        SetSpEffect(chrEntityId10, 5906);
    } else if (CharacterHasSpEffect(chrEntityId16, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId16, TargetEntityType.Character, chrEntityId, 32, chrEntityId);
        SetSpEffect(chrEntityId16, 5906);
        Goto(L2);
    }
L2:
    if (CharacterHasSpEffect(chrEntityId5, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId5, TargetEntityType.Character, chrEntityId, 33, chrEntityId);
        SetSpEffect(chrEntityId5, 5906);
    } else if (CharacterHasSpEffect(chrEntityId11, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId11, TargetEntityType.Character, chrEntityId, 33, chrEntityId);
        SetSpEffect(chrEntityId11, 5906);
    } else if (CharacterHasSpEffect(chrEntityId17, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId17, TargetEntityType.Character, chrEntityId, 33, chrEntityId);
        SetSpEffect(chrEntityId17, 5906);
        Goto(L3);
    }
L3:
    if (CharacterHasSpEffect(chrEntityId6, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId6, TargetEntityType.Character, chrEntityId, 34, chrEntityId);
        SetSpEffect(chrEntityId6, 5906);
    } else if (CharacterHasSpEffect(chrEntityId12, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId12, TargetEntityType.Character, chrEntityId, 34, chrEntityId);
        SetSpEffect(chrEntityId12, 5906);
    } else if (CharacterHasSpEffect(chrEntityId18, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId18, TargetEntityType.Character, chrEntityId, 34, chrEntityId);
        SetSpEffect(chrEntityId18, 5906);
        Goto(L4);
    }
L4:
    if (CharacterHasSpEffect(chrEntityId7, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId7, TargetEntityType.Character, chrEntityId, 35, chrEntityId);
        SetSpEffect(chrEntityId7, 5906);
    } else if (CharacterHasSpEffect(chrEntityId13, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId13, TargetEntityType.Character, chrEntityId, 35, chrEntityId);
        SetSpEffect(chrEntityId13, 5906);
    } else if (CharacterHasSpEffect(chrEntityId19, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId19, TargetEntityType.Character, chrEntityId, 35, chrEntityId);
        SetSpEffect(chrEntityId19, 5906);
        Goto(L5);
    }
L5:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(90575313, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 45614) || EventFlag(7512));
    EndIf(EventFlag(7512));
    if (CharacterHasSpEffect(chrEntityId2, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 41, chrEntityId);
        SetSpEffect(chrEntityId2, 5907);
    } else if (CharacterHasSpEffect(chrEntityId3, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId3, TargetEntityType.Character, chrEntityId, 41, chrEntityId);
        SetSpEffect(chrEntityId3, 5907);
    } else if (CharacterHasSpEffect(chrEntityId4, 45685)) {
        WarpCharacterAndCopyFloor(chrEntityId4, TargetEntityType.Character, chrEntityId, 41, chrEntityId);
        SetSpEffect(chrEntityId4, 5907);
        Goto(L0);
    }
L0:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(90575320, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 45611) || EventFlag(7512));
    EndIf(EventFlag(7512));
    SetSpEffect(chrEntityId2, 5900);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(90575330, Restart, function(chrEntityId) {
    DisableNetworkSync();
    if (!CharacterHasSpEffect(chrEntityId, 5105)) {
        if (CharacterHPValue(chrEntityId) > 0) {
            ChangeWeather(Weather.Type84, -1, true);
        }
    }
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7510) || PlayerInMap(19, 0, 56, 0));
    WaitFor(ElapsedFrames(1));
    if (!CharacterHasSpEffect(chrEntityId, 5105)) {
        if (CharacterHPValue(chrEntityId) > 0) {
            ChangeWeather(Weather.Type84, -1, true);
        }
    }
    WaitFor(PlayerInMap(19, 0, 56, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(7549);
});

$Event(90575340, Restart, function(eventFlagId, eventFlagId2, spEffectId, chrEntityId, spEffectId2, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        if (Signed(0) != spEffectId2) {
            WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2, GreaterOrEqual, 1));
        } else {
            WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
        }
    }
    SpawnMapSFX(0);
    ChangeWeather(Weather.Type83, -1, false);
    SetSpEffect(0, spEffectId);
});

$Event(90575302, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(7512));
    WaitFor(HPRatio(chrEntityId) <= 0);
    if (CharacterHasSpEffect(chrEntityId2, 45685)) {
        DisableCharacter(chrEntityId2);
    }
    ForceCharacterDeath(chrEntityId2, false);
});

$Event(90575400, Default, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9, chrEntityId10) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId2);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId4, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId5, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId6, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId7, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId8, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId9, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId10, true, CharacterUpdateFrequency.Every2Frames);
    WaitFor(PlayerInMap(19, 0, 56, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(-1);
});

$Event(90575401, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    DisableCharacterFadeOnEnable(chrEntityId);
    if (EventFlag(7511)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        DisableCharacterDefaultBackread(chrEntityId);
        EndEvent();
    }
    if (EventFlag(7512)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        DisableCharacterDefaultBackread(chrEntityId);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId);
    WaitFor(EventFlag(eventFlagId));
    DisableCharacterHPBarDisplay(chrEntityId);
    if (EventFlag(eventFlagId2)) {
        ForceAnimationPlayback(chrEntityId, 20010, false, false, false);
    }
    if (EventFlag(eventFlagId3)) {
        ForceAnimationPlayback(chrEntityId, 20011, false, false, false);
    }
    WaitFor(ElapsedSeconds(10));
    DisableCharacter(chrEntityId);
    DisableCharacterDefaultBackread(chrEntityId);
});

$Event(90575402, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    if (EventFlag(7512)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetBossBGM(756000, BossBGMState.Start);
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907550000);
        LinkToBossHealthBar(Disabled, 907550000, 0);
        LinkToBossHealthBar(Enabled, 907550000, chrEntityId2);
        EndEvent();
    }
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    WaitFor(EventFlag(eventFlagId));
    if (EventFlag(eventFlagId2)) {
        WaitFixedTimeSeconds(7);
        ForceAnimationPlayback(chrEntityId2, 20010, false, false, false);
    }
    if (EventFlag(eventFlagId3)) {
        WaitFixedTimeSeconds(3.17);
        ForceAnimationPlayback(chrEntityId2, 20011, false, false, false);
    }
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907550000);
    LinkToBossHealthBar(Disabled, 907550000, 0);
    LinkToBossHealthBar(Enabled, 907550000, chrEntityId2);
    PlaySE(chrEntityId2, SoundType.BGM, 756000000);
    SetNetworkconnectedEventFlagID(7511, ON);
    WaitFor(CharacterHasSpEffect(chrEntityId, 46215));
    SetBossBGM(756000, BossBGMState.Start);
});

$Event(90575403, Restart, function(entityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EndIf(EventFlag(7511));
    EndIf(EventFlag(eventFlagId4));
    WaitFor(
        HasDamageType(entityId, 20000, DamageType.Any)
            || EventFlag(eventFlagId)
            || EventFlag(eventFlagId4));
    SetEventFlagID(eventFlagId, ON);
    WaitFixedTimeFrames(1);
    WaitFor(
        HasDamageType(entityId, 20000, DamageType.Any)
            || EventFlag(eventFlagId2)
            || EventFlag(eventFlagId4));
    SetEventFlagID(eventFlagId2, ON);
    WaitFixedTimeFrames(1);
    WaitFor(
        HasDamageType(entityId, 20000, DamageType.Any)
            || EventFlag(eventFlagId3)
            || EventFlag(eventFlagId4));
    SetEventFlagID(eventFlagId3, ON);
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(eventFlagId4));
    SetNetworkconnectedEventFlagID(eventFlagId4, ON);
    SetNetworkconnectedEventFlagID(eventFlagId5, ON);
});

$Event(90575404, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EndIf(EventFlag(7511));
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId5));
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId4));
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId5, ON);
});

$Event(90575405, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(7511));
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        ((!(CharacterHasTeamType(10002, TeamType.Human)
            || CharacterHasTeamType(10002, TeamType.WhitePhantom))
            || EventFlag(eventFlagId3))
            && (!(CharacterHasTeamType(10003, TeamType.Human)
                || CharacterHasTeamType(10003, TeamType.WhitePhantom))
                || EventFlag(eventFlagId4))
            && (!(CharacterHasTeamType(10004, TeamType.Human)
                || CharacterHasTeamType(10004, TeamType.WhitePhantom))
                || EventFlag(eventFlagId5)))
            || EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});

$Event(99575406, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EndIf(EventFlag(7511));
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        EventFlag(eventFlagId2)
            || CharacterHasSpEffect(chrEntityId, 46235)
            || EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId));
    if (!CharacterHasSpEffect(chrEntityId, 46235)) {
        SetSpEffect(chrEntityId, 46235);
    }
    WaitFor(CharacterHasSpEffect(chrEntityId, 46235) || EventFlag(eventFlagId));
    WaitFor(!CharacterHasSpEffect(chrEntityId, 46235) || EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
});

$Event(99575410, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(7511));
    WaitFor(EventFlag(7511));
    if (EventFlag(19000700)) {
        SetSpEffect(chrEntityId, 46295);
        SetSpEffect(20000, 46296);
    }
});

$Event(99575420, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 45866) && CharacterHasSpEffect(chrEntityId, 45878));
    SetSpEffect(chrEntityId, 45879);
    WaitFixedTimeFrames(1);
    SetSpEffect(chrEntityId, 45876);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(99575421, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(CharacterHasSpEffect(chrEntityId, 45831) && CharacterHasSpEffect(chrEntityId, 45868));
    SetSpEffect(chrEntityId, 45878);
    SetSpEffect(chrEntityId, 45879);
    WaitFixedTimeFrames(1);
    SetSpEffect(chrEntityId, 45877);
    SetSpEffect(chrEntityId, 45832);
    SetSpEffect(chrEntityId, 45851);
    SetSpEffect(chrEntityId, 45870);
    SetSpEffect(chrEntityId, 45871);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(99575422, Restart, function(chrEntityId, areaEntityId, areaEntityId2, areaEntityId3, areaEntityId4, areaEntityId5, areaEntityId6, areaEntityId7, areaEntityId8, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(
        InArea(chrEntityId, areaEntityId)
            || InArea(chrEntityId, areaEntityId2)
            || InArea(chrEntityId, areaEntityId3)
            || InArea(chrEntityId, areaEntityId4)
            || InArea(chrEntityId, areaEntityId5)
            || InArea(chrEntityId, areaEntityId6)
            || InArea(chrEntityId, areaEntityId7)
            || InArea(chrEntityId, areaEntityId8));
    if (InArea(chrEntityId, areaEntityId)) {
        SetSpEffect(chrEntityId, 49070);
        SetCharacterEventTarget(chrEntityId, chrEntityId2);
        areaTime |= !InArea(chrEntityId, areaEntityId) || ElapsedSeconds(1);
        WaitFor(areaTime);
        RestartEvent();
    }
    if (InArea(chrEntityId, areaEntityId2)) {
        SetSpEffect(chrEntityId, 49070);
        SetCharacterEventTarget(chrEntityId, chrEntityId3);
        areaTime |= !InArea(chrEntityId, areaEntityId2) || ElapsedSeconds(1);
        WaitFor(areaTime);
        RestartEvent();
    }
    if (InArea(chrEntityId, areaEntityId3)) {
        SetSpEffect(chrEntityId, 49070);
        SetCharacterEventTarget(chrEntityId, chrEntityId4);
        areaTime |= !InArea(chrEntityId, areaEntityId3) || ElapsedSeconds(1);
        WaitFor(areaTime);
        RestartEvent();
    }
    if (InArea(chrEntityId, areaEntityId4)) {
        SetSpEffect(chrEntityId, 49070);
        SetCharacterEventTarget(chrEntityId, chrEntityId5);
        areaTime |= !InArea(chrEntityId, areaEntityId4) || ElapsedSeconds(1);
        WaitFor(areaTime);
        RestartEvent();
    }
    if (InArea(chrEntityId, areaEntityId5)) {
        SetSpEffect(chrEntityId, 49070);
        SetCharacterEventTarget(chrEntityId, chrEntityId6);
        areaTime |= !InArea(chrEntityId, areaEntityId5) || ElapsedSeconds(1);
        WaitFor(areaTime);
        RestartEvent();
    }
    if (InArea(chrEntityId, areaEntityId6)) {
        SetSpEffect(chrEntityId, 49070);
        SetCharacterEventTarget(chrEntityId, chrEntityId7);
        areaTime |= !InArea(chrEntityId, areaEntityId6) || ElapsedSeconds(1);
        WaitFor(areaTime);
        RestartEvent();
    }
    if (InArea(chrEntityId, areaEntityId7)) {
        SetSpEffect(chrEntityId, 49070);
        SetCharacterEventTarget(chrEntityId, chrEntityId8);
        areaTime |= !InArea(chrEntityId, areaEntityId7) || ElapsedSeconds(1);
        WaitFor(areaTime);
        RestartEvent();
    }
    if (InArea(chrEntityId, areaEntityId8)) {
        SetSpEffect(chrEntityId, 49070);
        SetCharacterEventTarget(chrEntityId, chrEntityId9);
        areaTime |= !InArea(chrEntityId, areaEntityId8) || ElapsedSeconds(1);
        WaitFor(areaTime);
        RestartEvent();
    }
});

$Event(99575430, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(
        (PlayerIsInOwnWorld() && BGMCommonState(4, 1)) || CharacterHasSpEffect(chrEntityId, 45880));
    SetSpEffect(chrEntityId, 45880);
    WaitFor(
        (PlayerIsInOwnWorld() && BGMCommonState(4, 0)) || !CharacterHasSpEffect(chrEntityId, 45880));
    SetSpEffect(chrEntityId, 45881);
    RestartEvent();
});

$Event(90515018, Restart, function(eventFlagId, eventFlagId2, bgmBossConvParamId, chrEntityId, spEffectId, targetAmount) {
    EndIf(EventFlag(eventFlagId2));
    if (!CharacterHasSpEffect(chrEntityId, 5108)) {
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        WaitFor(
            ((CharacterHasSpEffect(chrEntityId, spEffectId, GreaterOrEqual, 1)
                && CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount)
                && BossBGMPlaying(bgmBossConvParamId))
                || EventFlag(eventFlagId2));
        EndIf(EventFlag(eventFlagId2));
    }
    SetBossBGM(bgmBossConvParamId, BossBGMState.HeatUp);
    SetSpEffect(chrEntityId, 5108);
    WaitFor(!BossBGMPlaying(bgmBossConvParamId) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId2));
    RestartEvent();
});

$Event(99575440, Restart, function(eventFlagId, eventFlagId2, spEffectId, chrEntityId, spEffectId2, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        if (Signed(0) != spEffectId2) {
            WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2, GreaterOrEqual, 1));
        } else {
            WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
        }
    }
    ChangeWeather(Weather.Type40, -1, false);
    SpawnMapSFX(0);
    SetSpEffect(0, spEffectId);
});

$Event(90575500, Restart, function(chrEntityId) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    WaitFor(PlayerInMap(19, 0, 56, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(-1);
});

$Event(90575501, Restart, function(chrEntityId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907610000);
        LinkToBossHealthBar(Disabled, 907610000, 0);
        LinkToBossHealthBar(Enabled, 907610000, chrEntityId);
        SetBossBGM(760000, BossBGMState.Start);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(760000, BossBGMState.Start);
    ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
    EnableCharacterAI(chrEntityId);
    LinkToBossHealthBar(Disabled, 907610000, 0);
    LinkToBossHealthBar(Enabled, 907610000, chrEntityId);
    WaitFor(ElapsedSeconds(4));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907610000);
});

$Event(90575510, Restart, function(chrEntityId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    if (IsPlayerNo(1)) {
        SetSpEffect(20000, 46330);
    }
    if (IsPlayerNo(2)) {
        SetSpEffect(20000, 46331);
    }
    if (IsPlayerNo(3)) {
        SetSpEffect(20000, 46332);
    }
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 46305)
            && !CharacterHasSpEffect(chrEntityId, 46306)
            && HasDamageType(chrEntityId, 20000, DamageType.Any));
    SetSpEffect(20000, 46326);
    WaitFor(
        CharacterHasSpEffect(20000, 46328)
            || CharacterHasSpEffect(20000, 46329)
            || CharacterHasSpEffect(chrEntityId, 46320));
    if (CharacterHasSpEffect(chrEntityId, 46320)) {
        SetSpEffect(20000, 46321);
        RestartEvent();
    }
    WaitFor(
        (!CharacterHasSpEffect(20000, 46328) && !CharacterHasSpEffect(20000, 46329))
            || CharacterHasSpEffect(chrEntityId, 46320));
    if (CharacterHasSpEffect(chrEntityId, 46320)) {
        SetSpEffect(20000, 46321);
    }
    RestartEvent();
});

$Event(90575520, Restart, function(eventFlagId, eventFlagId2, spEffectId, chrEntityId, spEffectId2, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        if (Signed(0) != spEffectId2) {
            WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2, GreaterOrEqual, 1));
        } else {
            WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
        }
    }
    ChangeWeather(Weather.Type30, -1, false);
    SpawnMapSFX(0);
    SetSpEffect(0, spEffectId);
});

$Event(90575600, Restart, function(chrEntityId, entityId) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    SetEventPoint(chrEntityId, entityId, 0);
    // DisableLockOnPoint(chrEntityId, 220);
    WaitFor(PlayerInMap(19, 0, 56, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(4900);
});

$Event(90575601, Restart, function(chrEntityId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907620000);
        LinkToBossHealthBar(Disabled, 907620000, 0);
        LinkToBossHealthBar(Enabled, 907620000, chrEntityId);
        SetBossBGM(490000, BossBGMState.Start);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    // DisableLockOnPoint(chrEntityId, 221);
    // DisableLockOnPoint(chrEntityId, 222);
    // DisableLockOnPoint(chrEntityId, 223);
    // DisableLockOnPoint(chrEntityId, 224);
    WaitFor(EventFlag(7510) || EventFlag(7511) || PlayerInMap(19, 0, 56, 0));
    ActivateGparamOverride(4, 0);
    WaitFor(EventFlag(7511));
    EnableCharacterAI(chrEntityId);
    ForceAnimationPlayback(19000860, 20029, false, false, false);
    WaitFixedTimeSeconds(8.5);
    SetBossBGM(490000, BossBGMState.Start);
    // EnableLockOnPoint(chrEntityId, 221);
    // EnableLockOnPoint(chrEntityId, 222);
    // EnableLockOnPoint(chrEntityId, 223);
    // EnableLockOnPoint(chrEntityId, 224);
    // DeactivateGparamOverride(3);
    LinkToBossHealthBar(Disabled, 907620000, 0);
    LinkToBossHealthBar(Enabled, 907620000, chrEntityId);
    WaitFor(ElapsedSeconds(2.5));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907620000);
});

$Event(90575603, Default, function(chrEntityId) {
    DisableCharacter(chrEntityId);
    WaitFixedTimeSeconds(0.0);
    EnableCharacter(chrEntityId);
});

$Event(90575604, Default, function(chrEntityId) {
    DisableCharacter(chrEntityId);
    WaitFixedTimeSeconds(6.5);
    EnableCharacter(chrEntityId);
});

$Event(90575605, Default, function(chrEntityId) {
    DisableCharacter(chrEntityId);
    WaitFixedTimeSeconds(10.7);
    EnableCharacter(chrEntityId);
});

$Event(90575606, Default, function(chrEntityId) {
    DisableCharacter(chrEntityId);
    WaitFixedTimeSeconds(14.9);
    EnableCharacter(chrEntityId);
});

$Event(90575607, Default, function(chrEntityId) {
    DisableCharacter(chrEntityId);
    WaitFixedTimeSeconds(1.5);
    EnableCharacter(chrEntityId);
});

$Event(90575608, Default, function(chrEntityId) {
    DisableCharacter(chrEntityId);
    WaitFixedTimeSeconds(7.5);
    EnableCharacter(chrEntityId);
});

$Event(90575609, Default, function(chrEntityId) {
    DisableCharacter(chrEntityId);
    WaitFixedTimeSeconds(11.7);
    EnableCharacter(chrEntityId);
});

$Event(90575611, Default, function(chrEntityId) {
    DisableCharacter(chrEntityId);
    WaitFixedTimeSeconds(15.9);
    EnableCharacter(chrEntityId);
});

$Event(90575612, Default, function(chrEntityId) {
    DisableCharacter(chrEntityId);
    WaitFixedTimeSeconds(3.0);
    EnableCharacter(chrEntityId);
});

$Event(90575613, Default, function(chrEntityId) {
    DisableCharacter(chrEntityId);
    WaitFixedTimeSeconds(8.5);
    EnableCharacter(chrEntityId);
});

$Event(90575614, Default, function(chrEntityId) {
    DisableCharacter(chrEntityId);
    WaitFixedTimeSeconds(12.7);
    EnableCharacter(chrEntityId);
});

$Event(90575615, Restart, function(chrEntityId) { // 6212 jumpscare check
    WaitFor(CharacterHasSpEffect(19000860, 465862111));
    EnableCharacter(chrEntityId);
    EnableCharacterAI(chrEntityId);
    RandomlySetNetworkconnectedEventFlagInRange(62120, 62123, ON);
    if (EventFlag(62120)) {
        IssueShortWarpRequest(chrEntityId, TargetEntityType.Character, 19000860, 261);
    }
    if (EventFlag(62121)) {
        IssueShortWarpRequest(chrEntityId, TargetEntityType.Character, 19000860, 261);
    }
    if (EventFlag(62122)) {
        IssueShortWarpRequest(chrEntityId, TargetEntityType.Character, 19000860, 261);
    }
    if (EventFlag(62123)) {
        IssueShortWarpRequest(chrEntityId, TargetEntityType.Character, 19000860, 261);
        //IssueShortWarpRequest(chrEntityId, TargetEntityType.Character, 19000860, 334);
    }
    ForceAnimationPlayback(19000872, 20029, false, false, false);
    WaitFixedTimeSeconds(4);
    DisableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    ClearSpEffect(19000860, 465862111);
    SetEventFlagID(62120, OFF);
    SetEventFlagID(62121, OFF);
    SetEventFlagID(62122, OFF);
    SetEventFlagID(62123, OFF);
    RestartEvent();
});

$Event(90575610, Restart, function(chrEntityId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 47040)
            || CharacterHasSpEffect(chrEntityId, 47041)
            || CharacterHasSpEffect(chrEntityId, 47042));
    UnknownSound201013(1);
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 47040)
            && !CharacterHasSpEffect(chrEntityId, 47041)
            && !CharacterHasSpEffect(chrEntityId, 47042));
    UnknownSound201013(0);
    RestartEvent();
});

$Event(99575620, Restart, function(eventFlagId, eventFlagId2, spEffectId, chrEntityId, spEffectId2, targetAmount) {
    if (!EventFlag(9999)) {
        EndIf(EventFlag(eventFlagId2));
        if (eventFlagId != 0) {
            WaitFor(EventFlag(eventFlagId));
        }
        if (Signed(0) != spEffectId2) {
            WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2, GreaterOrEqual, 1));
        } else {
            WaitFor(CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount);
        }
    }
    ChangeWeather(Weather.Type50, -1, false);
    SpawnMapSFX(0);
    SetSpEffect(0, spEffectId);
});

$Event(90575602, Restart, function(chrEntityId) {
    EndIf(EventFlag(chrEntityId));
    WaitFor(ElapsedFrames(1));
    WaitFor(CharacterHasSpEffect(chrEntityId, 47055));
    ActivateGparamOverride(4, 3);
    WaitFixedTimeFrames(1);
    WaitFor(CharacterHasSpEffect(chrEntityId, 47056) || HPRatio(chrEntityId) <= 0);
    DeactivateGparamOverride(3);
    RestartEvent();
});

$Event(90575051, Restart, function(chrEntityId, chrEntityId2, entityId, entityId2) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId);
        EnableCharacterAI(chrEntityId2);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907500000);
        LinkToBossHealthBar(Disabled, 907500000, 0);
        LinkToBossHealthBar(Enabled, 907500000, chrEntityId);
        LinkToBossHealthBar(Enabled, 907500000, chrEntityId2);
        SetBossBGM(750000, BossBGMState.HeatUp);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(chrEntityId, 30028, true, false, false);
    ForceAnimationPlayback(chrEntityId2, 30000, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(750000, BossBGMState.HeatUp);
    ForceAnimationPlayback(chrEntityId, 20028, false, false, false);
    ForceAnimationPlayback(entityId, 20010, false, false, false);
    ForceAnimationPlayback(entityId2, 20011, false, false, false);
    EnableCharacterAI(chrEntityId);
    EnableCharacterAI(chrEntityId2);
    LinkToBossHealthBar(Disabled, 907500000, 0);
    LinkToBossHealthBar(Enabled, 907500000, chrEntityId);
    LinkToBossHealthBar(Enabled, 907500000, chrEntityId2);
    WaitFor(ElapsedSeconds(3));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907500000);
});

$Event(90575060, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(chrEntityId, 5401));
    SetSpEffect(chrEntityId2, 5401);
    SetSpEffect(chrEntityId2, 7370);
    SetSpEffect(chrEntityId2, 42082);
    SetSpEffect(chrEntityId2, 42099);
    ChangeCharacterDispmask(chrEntityId2, 20, ON);
});

$Event(90575070, Restart, function(chrEntityId, chrEntityId2, dummypolyId, spEffectId, spEffectId2) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId2));
    WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId, dummypolyId, chrEntityId, -1, -1);
    SetSpEffect(chrEntityId2, spEffectId);
    WaitFor(!CharacterHasSpEffect(chrEntityId, spEffectId2));
    RestartEvent();
});

$Event(90575950, Restart, function(bgmBossConvParamId, chrEntityId, spEffectId, targetAmount) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    if (Signed(0) != spEffectId) {
        spHp |= CharacterHasSpEffect(chrEntityId, spEffectId, GreaterOrEqual, 1);
    } else {
        spHp |= CharacterRatioHPRatio(chrEntityId, NotEqual, 0) <= targetAmount;
    }
    WaitFor((spHp && BossBGMPlaying(bgmBossConvParamId)) || EventFlag(7512));
    EndIf(EventFlag(7512));
    SetBossBGM(bgmBossConvParamId, BossBGMState.HeatUp2);
    WaitFor(!BossBGMPlaying(bgmBossConvParamId) || EventFlag(7512));
    EndIf(EventFlag(7512));
    RestartEvent();
});

$Event(90575161, Restart, function(chrEntityId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907510000);
        LinkToBossHealthBar(Disabled, 907510000, 0);
        LinkToBossHealthBar(Enabled, 907510000, chrEntityId);
        SetBossBGM(751000, BossBGMState.HeatUp);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    WaitFor(EventFlag(7511));
    SetSpEffect(chrEntityId, 5108);
    SetBossBGM(751000, BossBGMState.HeatUp);
    ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
    EnableCharacterAI(chrEntityId);
    LinkToBossHealthBar(Disabled, 907510000, 0);
    LinkToBossHealthBar(Enabled, 907510000, chrEntityId);
    WaitFor(ElapsedSeconds(3));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907510000);
});

$Event(90575160, Default, function(chrEntityId, chrEntityId2, chrEntityId3) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId2);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    DisableLockOnPoint(chrEntityId2, 220);
    DisableCharacterGravity(chrEntityId2);
    DisableCharacterHPBarDisplay(chrEntityId2);
    EnableCharacterDefaultBackread(chrEntityId3);
    DisableCharacterCollision(chrEntityId3);
    DisableCharacterAI(chrEntityId3);
    DisableLockOnPoint(chrEntityId3, 220);
    DisableCharacterGravity(chrEntityId3);
    DisableCharacterHPBarDisplay(chrEntityId3);
    WaitFixedTimeFrames(1);
    SetCharacterEventTarget(chrEntityId, chrEntityId3);
});

$Event(90575162, Restart, function(chrEntityId, chrEntityId2) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    if (!CharacterHasSpEffect(chrEntityId, 42134)) {
        WaitFor(CharacterHasSpEffect(chrEntityId, 42134));
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 410, chrEntityId);
    }
L0:
    WaitFor(!CharacterHasSpEffect(chrEntityId, 42134));
    RestartEvent();
});

$Event(90575163, Restart, function(chrEntityId, entityId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    if (!CharacterHasSpEffect(chrEntityId, 42134)) {
L0:
        SetSpEffect(20000, 42135);
        SetSpEffect(20000, 42136);
        WaitFor(
            CharacterHasSpEffect(chrEntityId, 42134)
                || CharacterHasSpEffect(20000, 42123)
                || CharacterHasSpEffect(20000, 42132)
                || CharacterHasSpEffect(20000, 42133));
        RestartEvent();
    }
L1:
    WaitFor(ElapsedFrames(2));
    GotoIf(L2, EntityInRadiusOfEntity(20000, entityId, 30, 1));
    Goto(L3);
L2:
    SetSpEffect(20000, 42123);
    SetSpEffect(20000, 42136);
    WaitFor(
        !EntityInRadiusOfEntity(20000, entityId, 30, 1)
            || !CharacterHasSpEffect(chrEntityId, 42134)
            || CharacterHasSpEffect(20000, 42132)
            || CharacterHasSpEffect(20000, 42133));
    RestartEvent();
L3:
    SetSpEffect(20000, 42135);
    SetSpEffect(20000, 42136);
    WaitFor(ElapsedFrames(1));
    WaitFor(
        (!CharacterHasSpEffect(20000, 42139) && !CharacterHasSpEffect(20000, 102501))
            || EntityInRadiusOfEntity(20000, entityId, 30, 1)
            || !CharacterHasSpEffect(chrEntityId, 42134));
    RestartIf(
        EntityInRadiusOfEntity(20000, entityId, 30, 1) || !CharacterHasSpEffect(chrEntityId, 42134));
    SetSpEffect(20000, 42132);
    SetSpEffect(20000, 42133);
    WaitFor(
        EntityInRadiusOfEntity(20000, entityId, 30, 1)
            || !CharacterHasSpEffect(chrEntityId, 42134)
            || CharacterHasSpEffect(20000, 42139)
            || CharacterHasSpEffect(20000, 102501)
            || (!CharacterHasSpEffect(20000, 42132) && !CharacterHasSpEffect(20000, 42133)));
    RestartEvent();
});

$Event(90575164, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(20000, 102501));
    ShowFloatingMessage(202, 20000);
    WaitFixedTimeSeconds(0.5);
    WaitFor(!CharacterHasSpEffect(20000, 102501));
    HideFloatingMessage(202, 20000);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(90575165, Restart, function(chrEntityId) {
    DisableNetworkSync();
    WaitFor(PlayerInMap(19, 0, 56, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(7510);
    WaitFor(CharacterHasSpEffect(chrEntityId, 42134));
    ChangeCamera(7515);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 42134));
    RestartEvent();
});

$Event(90575903, Restart, function(areaId, chrEntityId, chrEntityId2, chrEntityId3) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EndIf(EventFlag(18002800));
    if (!MapHasPermissionToUpdate(false, areaId, 0, 0, 0)) {
        if (chrEntityId != 0) {
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Normal);
        }
        if (chrEntityId2 != 0) {
            SetNetworkUpdateAuthority(chrEntityId2, AuthorityLevel.Normal);
        }
        if (chrEntityId3 != 0) {
            SetNetworkUpdateAuthority(chrEntityId3, AuthorityLevel.Normal);
        }
    }
    WaitFor(MapHasPermissionToUpdate(false, areaId, 0, 0, 0));
    if (MapHasPermissionToUpdate(false, areaId, 0, 0, 0)) {
        if (chrEntityId != 0) {
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
        }
        if (chrEntityId2 != 0) {
            SetNetworkUpdateAuthority(chrEntityId2, AuthorityLevel.Forced);
        }
        if (chrEntityId3 != 0) {
            SetNetworkUpdateAuthority(chrEntityId3, AuthorityLevel.Forced);
        }
    }
    WaitFor(!MapHasPermissionToUpdate(false, areaId, 0, 0, 0));
    RestartEvent();
});

$Event(90575250, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    EnableCharacterImmortality(chrEntityId2);
    EnableCharacterImmortality(chrEntityId3);
    DisableCharacterCollision(chrEntityId4);
    DisableCharacterAI(chrEntityId4);
    DisableLockOnPoint(chrEntityId4, 220);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId4);
    if (CharacterHPValue(chrEntityId4) > 0) {
        CreateReferredDamagePair(chrEntityId, chrEntityId4);
        SetCharacterEventTarget(chrEntityId, chrEntityId4);
    }
    WaitFor(PlayerInMap(19, 0, 56, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(7539);
});

$Event(90575251, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, areaEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    if (EventFlag(7512)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        DisableCharacterAI(chrEntityId);
        EndEvent();
    }
    if (EventFlag(7511)) {
        SetBossBGM(752000, BossBGMState.HeatUp);
        LinkToBossHealthBar(Disabled, 907520000, 0);
        LinkToBossHealthBar(Enabled, 907520000, chrEntityId);
        if (EventFlag(eventFlagId4)) {
            EnableCharacter(chrEntityId2);
            EnableCharacterAI(chrEntityId2);
            EnableCharacter(chrEntityId3);
            EnableCharacterAI(chrEntityId3);
            SetCharacterBackreadState(chrEntityId5, false);
            EnableCharacter(chrEntityId5);
            EnableCharacterAI(chrEntityId5);
            DisplayBossHealthBar(Enabled, chrEntityId5, 2, 907520002);
            DisplayBossHealthBar(Enabled, chrEntityId2, 1, 907520000);
            DisplayBossHealthBar(Enabled, chrEntityId3, 0, 907530000);
            LinkToBossHealthBar(Disabled, 907520002, 0);
            LinkToBossHealthBar(Enabled, 907520002, chrEntityId5);
            LinkToBossHealthBar(Enabled, 907530000, chrEntityId3);
            WaitFor(ElapsedSeconds(10));
            SetCharacterHome(chrEntityId2, areaEntityId);
            SetCharacterHome(chrEntityId3, areaEntityId);
            EndEvent();
        }
        if (EventFlag(eventFlagId3)) {
            EnableCharacter(chrEntityId2);
            EnableCharacterAI(chrEntityId2);
            EnableCharacter(chrEntityId3);
            EnableCharacterAI(chrEntityId3);
            SetSpEffect(chrEntityId2, 47230);
            SetSpEffect(chrEntityId3, 47230);
            DisplayBossHealthBar(Enabled, chrEntityId4, 0, 907520000);
            WaitFor(ElapsedSeconds(10));
            SetCharacterHome(chrEntityId2, areaEntityId);
            SetCharacterHome(chrEntityId3, areaEntityId);
            EndEvent();
        }
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId2);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    SetSpEffect(chrEntityId2, 45918);
    SetSpEffect(chrEntityId2, 47230);
    SetSpEffect(chrEntityId3, 47230);
    WaitFor(EventFlag(7511));
    SetSpEffect(chrEntityId, 5108);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    SetBossBGM(752000, BossBGMState.HeatUp);
    LinkToBossHealthBar(Disabled, 907520000, 0);
    LinkToBossHealthBar(Enabled, 907520000, chrEntityId);
    WaitFor(ElapsedSeconds(3));
    DisplayBossHealthBar(Enabled, chrEntityId4, 0, 907520000);
    WaitFor(ElapsedSeconds(10));
    SetCharacterHome(chrEntityId2, areaEntityId);
    SetCharacterHome(chrEntityId3, areaEntityId);
});

$Event(90575257, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHPValue(chrEntityId2) <= 0);
    DisableCharacterImmortality(chrEntityId);
    DisableCharacterImmortality(chrEntityId3);
    DisableCharacterImmortality(chrEntityId4);
    WaitFixedTimeFrames(1);
    SetSpEffect(chrEntityId3, 47140);
    SetSpEffect(chrEntityId4, 47140);
    WaitFor(EventFlag(7512));
    DisplayBossHealthBar(Disabled, chrEntityId3, 1, 907520000);
    DisplayBossHealthBar(Disabled, chrEntityId4, 0, 907530000);
});

$Event(90575266, Restart, function(chrEntityId, value) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EnableLockOnPoint(chrEntityId, 220);
    if (value != 1) {
        EnableLockOnPoint(chrEntityId, 221);
        EnableLockOnPoint(chrEntityId, 222);
        EnableLockOnPoint(chrEntityId, 223);
    }
    WaitFor(CharacterHasSpEffect(chrEntityId, 47245));
    DisableLockOnPoint(chrEntityId, 220);
    if (value != 1) {
        DisableLockOnPoint(chrEntityId, 221);
        DisableLockOnPoint(chrEntityId, 222);
        DisableLockOnPoint(chrEntityId, 223);
    }
    WaitFor(!CharacterHasSpEffect(chrEntityId, 47245));
    RestartEvent();
});

$Event(90575255, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, areaEntityId, eventFlagId) {
    EndIf(EventFlag(7512));
    if (EventFlag(eventFlagId)) {
        SetCharacterBackreadState(chrEntityId3, false);
        EnableCharacter(chrEntityId3);
        EnableCharacterAI(chrEntityId3);
        SetCharacterEventTarget(chrEntityId, chrEntityId2);
        SetCharacterEventTarget(chrEntityId2, chrEntityId);
        WaitFor(ElapsedSeconds(5));
        SetCharacterHome(chrEntityId3, areaEntityId);
        EndEvent();
    }
    SetCharacterBackreadState(chrEntityId3, false);
    DisableCharacterCollision(chrEntityId3);
    ForceAnimationPlayback(chrEntityId3, 30028, false, false, false);
    DisableCharacterAI(chrEntityId3);
    WaitFor(CharacterHPValue(chrEntityId4) <= 1);
    SetSpEffect(chrEntityId, 47231);
    SetSpEffect(chrEntityId2, 47231);
    SetSpEffect(chrEntityId, 47140);
    SetSpEffect(chrEntityId2, 47140);
    WaitFor(CharacterHasSpEffect(chrEntityId, 47125));
    WaitFor(ElapsedSeconds(3.5));
    SetSpEffect(chrEntityId3, 45918);
    EnableCharacterCollision(chrEntityId3);
    EnableCharacterAI(chrEntityId3);
    WaitFor(ElapsedFrames(3));
    WarpCharacterAndCopyFloor(chrEntityId3, TargetEntityType.Character, chrEntityId, 220, chrEntityId);
    SetSpEffect(chrEntityId3, 47126);
    WaitFor(CharacterHasSpEffect(chrEntityId3, 47130) || ElapsedSeconds(10));
    if (!CharacterHasSpEffect(chrEntityId3, 47126) && !CharacterHasSpEffect(chrEntityId3, 47130)) {
        SetSpEffect(chrEntityId3, 47126);
    }
    WaitFor(CharacterHasSpEffect(chrEntityId3, 47130));
    SetSpEffect(chrEntityId, 47131);
    SetSpEffect(chrEntityId2, 47131);
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    SetCharacterEventTarget(chrEntityId2, chrEntityId);
    WaitFixedTimeFrames(5);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetCharacterHome(chrEntityId3, areaEntityId);
    WaitFor(
        (CharacterHasSpEffect(chrEntityId, 47255) && CharacterHasSpEffect(chrEntityId2, 47255))
            || MapHasPermissionToUpdate(false, 19, 0, 0, 0)
            || ElapsedSeconds(20));
    WaitFor(ElapsedSeconds(5));
    WaitFor(MapHasPermissionToUpdate(false, 19, 0, 0, 0));
    if (!CharacterHasSpEffect(chrEntityId, 47255)) {
        SetSpEffect(chrEntityId, 47131);
    }
    if (!CharacterHasSpEffect(chrEntityId2, 47255)) {
        SetSpEffect(chrEntityId2, 47131);
    }
});

$Event(90575256, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, eventFlagId) {
    EndIf(EventFlag(7512));
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterHPValue(chrEntityId4) <= 1);
    WaitFor(ElapsedSeconds(4));
    DisplayBossHealthBar(Disabled, chrEntityId4, 0, 907520000);
    WaitFor(CharacterHasSpEffect(chrEntityId3, 47126));
    WaitFor(ElapsedSeconds(3.5));
    WaitFor(ElapsedSeconds(2.5));
    DisplayBossHealthBar(Enabled, chrEntityId3, 2, 907520002);
    DisplayBossHealthBar(Enabled, chrEntityId, 1, 907520000);
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907530000);
    LinkToBossHealthBar(Disabled, 907520002, 0);
    LinkToBossHealthBar(Enabled, 907520002, chrEntityId3);
    LinkToBossHealthBar(Enabled, 907530000, chrEntityId2);
});

$Event(90575263, Restart, function(chrEntityId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(chrEntityId, 47221));
    DisableCharacterCollision(chrEntityId);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 47221));
    EnableCharacterCollision(chrEntityId);
    RestartEvent();
});

$Event(90575267, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(7512));
    SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
    WaitFor(EventFlag(eventFlagId));
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 47111)
            && !CharacterHasSpEffect(chrEntityId2, 47116)
            && CharacterHasSpEffect(chrEntityId3, 47250));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 47111)
            || CharacterHasSpEffect(chrEntityId2, 47116)
            || !CharacterHasSpEffect(chrEntityId3, 47250)
            || ElapsedSeconds(15));
    RestartIf(
        CharacterHasSpEffect(chrEntityId, 47111)
            || CharacterHasSpEffect(chrEntityId2, 47116)
            || !CharacterHasSpEffect(chrEntityId3, 47250));
    ForceAnimationPlayback(chrEntityId3, 20018, false, false, false);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(1));
    SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
    WaitFor(ElapsedSeconds(9));
    RestartEvent();
});

$Event(90575260, Restart, function(chrEntityId, chrEntityId2, spEffectId, spEffectId2, eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 47121) || CharacterHasSpEffect(chrEntityId2, spEffectId));
    if (!CharacterHasSpEffect(chrEntityId2, spEffectId)) {
        SetSpEffect(chrEntityId2, spEffectId);
    }
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 47121) || !CharacterHasSpEffect(chrEntityId2, spEffectId));
    if (CharacterHasSpEffect(chrEntityId, 47121)) {
        WaitFor(!CharacterHasSpEffect(chrEntityId, 47121) || ElapsedSeconds(10));
    }
    if (CharacterHasSpEffect(chrEntityId2, spEffectId)) {
        SetSpEffect(chrEntityId2, spEffectId2);
    }
    RestartEvent();
});

$Event(90575261, Restart, function(chrEntityId, chrEntityId2, spEffectId, spEffectId2, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    if (EventFlag(eventFlagId) && CharacterHasSpEffect(chrEntityId, spEffectId2)) {
        CreateReferredDamagePair(chrEntityId, chrEntityId2);
        ChangeCharacterDispmask(chrEntityId, 10, ON);
    }
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId2, spEffectId));
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 220, chrEntityId2);
    WaitFor(CharacterHasSpEffect(chrEntityId2, 47182) || EventFlag(eventFlagId2));
    RestartIf(EventFlag(eventFlagId2));
    SetSpEffect(chrEntityId, 47181);
    WaitFor(
        (!CharacterHasSpEffect(chrEntityId, 47121) && ElapsedFrames(5)) || EventFlag(eventFlagId2));
    RestartIf(EventFlag(eventFlagId2));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 47185)
            || CharacterHasSpEffect(chrEntityId, 47121)
            || EventFlag(eventFlagId2));
    RestartIf(EventFlag(eventFlagId2));
    RestartIf(CharacterHasSpEffect(chrEntityId, 47121));
    CreateReferredDamagePair(chrEntityId, chrEntityId2);
    ChangeCharacterDispmask(chrEntityId, 10, ON);
    WaitFixedTimeFrames(5);
    RestartEvent();
});

$Event(90575262, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, spEffectId, spEffectId2, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    if (EventFlag(eventFlagId) && !CharacterHasSpEffect(chrEntityId, spEffectId)) {
        CreateReferredDamagePair(chrEntityId, chrEntityId3);
        ChangeCharacterDispmask(chrEntityId, 10, OFF);
    }
    WaitFor(EventFlag(eventFlagId));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, spEffectId) && !CharacterHasSpEffect(chrEntityId, 47121));
    WaitFor(ElapsedSeconds(1));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, spEffectId2)
            || (CharacterHasSpEffect(chrEntityId, 47121) && !CharacterHasSpEffect(chrEntityId, 47165))
            || EventFlag(eventFlagId2));
    RestartIf(EventFlag(eventFlagId2));
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 220, chrEntityId2);
    WaitFixedTimeFrames(3);
    CreateReferredDamagePair(chrEntityId, chrEntityId3);
    if (CharacterHPValue(chrEntityId2) > 0) {
        ForceAnimationPlayback(chrEntityId2, 20018, false, false, false);
    }
    ChangeCharacterDispmask(chrEntityId, 10, OFF);
    RestartEvent();
});

$Event(90575264, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 47177) || EventFlag(7512));
    EndIf(EventFlag(7512));
    SetSpEffect(chrEntityId2, 47175);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 47177));
    RestartEvent();
});

$Event(90575265, Restart, function(chrEntityId, chrEntityId2, spEffectId, eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EndIf(CharacterHPValue(chrEntityId2) <= 0);
    if (!(CharacterHasSpEffect(chrEntityId, spEffectId) && CharacterHasSpEffect(chrEntityId2, 47250))) {
        WaitFor(EventFlag(eventFlagId));
        WaitFor(
            (CharacterHasSpEffect(chrEntityId, spEffectId)
                && CharacterHasSpEffect(chrEntityId2, 47250))
                || CharacterHPValue(chrEntityId2) <= 0);
        EndIf(CharacterHPValue(chrEntityId2) <= 0);
        WaitFor(ElapsedSeconds(1));
    }
L0:
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 179, chrEntityId2);
    WaitFixedTimeFrames(9);
    RestartEvent();
});

$Event(90575350, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId2);
    EnableCharacterDefaultBackread(chrEntityId3);
    EnableCharacterDefaultBackread(chrEntityId4);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId4, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId2);
    PlaySE(chrEntityId, SoundType.CharacterMotion, 754009500);
    PlaySE(chrEntityId2, SoundType.CharacterMotion, 754009500);
});

$Event(90575351, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, eventFlagId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        ForceCharacterDeath(chrEntityId3, false);
        EndEvent();
    }
    if (EventFlag(eventFlagId)) {
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        ForceCharacterDeath(chrEntityId3, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacter(chrEntityId3);
        EnableCharacterAI(chrEntityId);
        EnableCharacterAI(chrEntityId3);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907540001);
        LinkToBossHealthBar(Disabled, 907540001, 0);
        LinkToBossHealthBar(Enabled, 907540001, chrEntityId);
        LinkToBossHealthBar(Enabled, 907540001, chrEntityId2);
        LinkToBossHealthBar(Enabled, 907540001, chrEntityId3);
        SetBossBGM(754000, BossBGMState.HeatUp);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId3);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId3);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    ForceAnimationPlayback(chrEntityId2, 30005, true, false, false);
    ForceAnimationPlayback(chrEntityId3, 30005, true, false, false);
    WaitFor(EventFlag(7510) || PlayerInMap(19, 0, 56, 0));
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId3);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId3);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    ForceAnimationPlayback(chrEntityId2, 30005, true, false, false);
    ForceAnimationPlayback(chrEntityId3, 30005, true, false, false);
    WaitFor(EventFlag(7511));
    SetBossBGM(754000, BossBGMState.HeatUp);
    ForceAnimationPlayback(chrEntityId, 20027, false, false, false);
    EnableCharacterAI(chrEntityId);
    EnableCharacter(chrEntityId3);
    EnableCharacterAI(chrEntityId3);
    SetCharacterEventTarget(chrEntityId2, chrEntityId);
    SetCharacterEventTarget(chrEntityId3, chrEntityId);
    LinkToBossHealthBar(Disabled, 907540001, 0);
    LinkToBossHealthBar(Enabled, 907540001, chrEntityId);
    LinkToBossHealthBar(Enabled, 907540001, chrEntityId2);
    LinkToBossHealthBar(Enabled, 907540001, chrEntityId3);
    WaitFor(ElapsedSeconds(4));
    if (CharacterHasSpEffect(chrEntityId, 5080)) {
        ForceAnimationPlayback(chrEntityId, 20027, false, false, false);
        WaitFor(ElapsedSeconds(4));
    }
    if (CharacterHasSpEffect(chrEntityId, 5080)) {
        ForceAnimationPlayback(chrEntityId, 20027, false, false, false);
        WaitFor(ElapsedSeconds(4));
    }
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907540001);
    WaitFor(ElapsedSeconds(4));
    if (CharacterHasSpEffect(chrEntityId, 5080)) {
        ForceAnimationPlayback(chrEntityId, 20027, false, false, false);
        WaitFor(ElapsedSeconds(4));
    }
    if (CharacterHasSpEffect(chrEntityId, 5080)) {
        ForceAnimationPlayback(chrEntityId, 20027, false, false, false);
        WaitFor(ElapsedSeconds(4));
    }
});

$Event(90575352, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    if (CharacterHPValue(chrEntityId) <= 0) {
        WaitFor(ElapsedFrames(1));
        DisplayBossHealthBar(Disabled, chrEntityId, 0, 907540000);
        LinkToBossHealthBar(Disabled, 907540000, 0);
        LinkToBossHealthBar(Enabled, 907540000, chrEntityId2);
    } else {
        if (EventFlag(eventFlagId)) {
            SetCharacterBackreadState(chrEntityId2, false);
            EnableCharacterDefaultBackread(chrEntityId2);
            EnableCharacter(chrEntityId2);
            EnableCharacterAI(chrEntityId2);
            DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907540000);
            LinkToBossHealthBar(Disabled, 907540000, 0);
            LinkToBossHealthBar(Enabled, 907540000, chrEntityId2);
            SetNetworkconnectedEventFlagID(6301, ON);
            SetBossBGM(754000, BossBGMState.HeatUp2);
            EndEvent();
        }
        SetCharacterBackreadState(chrEntityId2, false);
        EnableCharacterDefaultBackread(chrEntityId2);
        EnableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceAnimationPlayback(chrEntityId2, 30029, true, false, false);
        WaitFor(CharacterHPValue(chrEntityId) <= 0 || EventFlag(eventFlagId));
        WaitFor(ElapsedSeconds(5));
        DisplayBossHealthBar(Disabled, chrEntityId, 0, 907540001);
    }
L0:
    WaitFor(ElapsedSeconds(4.5));
    ForceAnimationPlayback(chrEntityId2, 20029, true, false, false);
    EnableCharacterAI(chrEntityId2);
    WaitFor(ElapsedSeconds(13));
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907540000);
    LinkToBossHealthBar(Disabled, 907540000, 0);
    LinkToBossHealthBar(Enabled, 907540000, chrEntityId2);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(6301, ON);
});

$Event(90575360, Restart, function(chrEntityId, spEffectId, npcPartId, npcPartGroupIdx, npcPartHP, lockOnDummypolyId, bitNumber, spEffectId2, spEffectId3, spEffectId4, spEffectId5) {
    if (!CharacterHasSpEffect(chrEntityId, spEffectId5)) {
        DisableLockOnPoint(chrEntityId, lockOnDummypolyId);
    }
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, npcPartHP, 1, 0.1, false, false);
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, false);
    EnableLockOnPoint(chrEntityId, lockOnDummypolyId);
    ChangeCharacterDispmask(chrEntityId, bitNumber, ON);
    WaitFixedTimeFrames(1);
    WaitFor(
        NPCPartHP(chrEntityId, npcPartId) <= 0
            || CharacterHasSpEffect(chrEntityId, spEffectId2)
            || CharacterHPValue(chrEntityId) <= 0);
    SetSpEffect(chrEntityId, spEffectId3);
    SetSpEffect(chrEntityId, spEffectId4);
    SetNPCPartHP(chrEntityId, npcPartId, 0, false);
    DisableLockOnPoint(chrEntityId, lockOnDummypolyId);
    ChangeCharacterDispmask(chrEntityId, bitNumber, OFF);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(90575450, Default, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, chrEntityId8, chrEntityId9, chrEntityId10, chrEntityId11, chrEntityId12, chrEntityId13) {
    DisableNetworkSync();
    EnableCharacterDefaultBackread(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId2);
    EnableCharacterDefaultBackread(chrEntityId11);
    EnableCharacterDefaultBackread(chrEntityId12);
    EnableCharacterDefaultBackread(chrEntityId13);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisableCharacterHPBarDisplay(chrEntityId);
    SetNetworkUpdateRate(chrEntityId3, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId4, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId5, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId6, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId7, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId8, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId9, true, CharacterUpdateFrequency.Every2Frames);
    SetNetworkUpdateRate(chrEntityId10, true, CharacterUpdateFrequency.Every2Frames);
    WaitFor(PlayerInMap(19, 0, 56, 0));
    WaitFor(ElapsedFrames(1));
    ChangeCamera(-1);
});

$Event(90575452, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    if (EventFlag(7512)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetBossBGM(756000, BossBGMState.HeatUp);
        DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907550000);
        LinkToBossHealthBar(Disabled, 907550000, 0);
        LinkToBossHealthBar(Enabled, 907550000, chrEntityId2);
        EndEvent();
    }
    DisableCharacter(chrEntityId2);
    DisableCharacterAI(chrEntityId2);
    WaitFor(EventFlag(eventFlagId));
    if (EventFlag(eventFlagId2)) {
        WaitFixedTimeSeconds(7);
        ForceAnimationPlayback(chrEntityId2, 20010, false, false, false);
    }
    if (EventFlag(eventFlagId3)) {
        WaitFixedTimeSeconds(3.17);
        ForceAnimationPlayback(chrEntityId2, 20011, false, false, false);
    }
    EnableCharacter(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    SetNetworkUpdateRate(chrEntityId2, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, 907550000);
    LinkToBossHealthBar(Disabled, 907550000, 0);
    LinkToBossHealthBar(Enabled, 907550000, chrEntityId2);
    PlaySE(chrEntityId2, SoundType.BGM, 756000000);
    SetNetworkconnectedEventFlagID(7511, ON);
    WaitFor(CharacterHasSpEffect(chrEntityId, 46215));
    SetBossBGM(756000, BossBGMState.HeatUp);
});

$Event(90515022, Default, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    WaitFor(EventFlag(eventFlagId));
    WaitFor(!CharacterHasSpEffect(chrEntityId, 7999, GreaterOrEqual, 1));
    ActivateMultiplayerdependantBuffs(chrEntityId);
    SetSpEffect(chrEntityId, 7999);
    RestartEvent();
});

$Event(99575485, Restart, function(chrEntityId, eventFlagId) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(chrEntityId, 5106));
    WaitFor(
        PlayerIsInOwnWorld() && BGMCommonState(4, 0) && !CharacterHasSpEffect(chrEntityId, 49420));
    WaitFor(PlayerIsInOwnWorld() && BGMCommonState(4, 1));
    if (HPRatio(chrEntityId) <= 0.4) {
        flag |= EventValue(eventFlagId, 2) >= 1;
    } else if (HPRatio(chrEntityId) <= 0.6) {
        flag |= EventValue(eventFlagId, 2) >= 1;
    } else {
        flag |= EventValue(eventFlagId, 2) >= 2;
        Goto(L0);
    }
L0:
    if (flag) {
        ClearEventValue(eventFlagId, 2);
        SetSpEffect(chrEntityId, 49420);
        WaitFor(ElapsedFrames(1));
        RestartEvent();
    }
    IncrementNetworkconnectedEventValue(eventFlagId, 2, 3);
    RestartEvent();
});

$Event(99575486, Restart, function(chrEntityId) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    WaitFor(EventFlag(7511));
    WaitFor(ElapsedSeconds(5));
    WaitFor(!BossBGMPlaying(756000));
    WaitFor(ElapsedSeconds(1));
    EndIf(EventFlag(7512));
    if (CharacterHasSpEffect(chrEntityId, 5106)) {
        SetBossBGM(756000, BossBGMState.HeatUp2);
        RestartEvent();
    }
    SetBossBGM(756000, BossBGMState.HeatUp);
    RestartEvent();
});

$Event(99575466, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, dummypolyId, generatorEntityId, eventFlagId, eventFlagId2) {
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    if (EventFlag(eventFlagId2)) {
        SetCharacterBackreadState(chrEntityId3, false);
        EnableCharacter(chrEntityId3);
        EnableCharacterCollision(chrEntityId3);
        EnableCharacterAI(chrEntityId3);
    } else if (!CharacterDead(chrEntityId3)) {
        if (IsPlayerNo(1)) {
            WaitFor(HPRatio(chrEntityId3) > 0);
        }
        if (IsPlayerNo(2)) {
            WaitFor(HPRatio(chrEntityId3) > 0);
        }
        if (IsPlayerNo(3)) {
            WaitFor(HPRatio(chrEntityId3) > 0);
        }
        SetCharacterBackreadState(chrEntityId3, false);
        DisableCharacterCollision(chrEntityId3);
        DisableCharacterAI(chrEntityId3);
        ForceAnimationPlayback(chrEntityId3, 60507, false, false, false);
        if (!EventFlag(eventFlagId)) {
            DisableCharacter(chrEntityId3);
        }
        if (EventFlag(eventFlagId)) {
            WaitFor(CharacterHasSpEffect(chrEntityId, 49135));
        }
        WaitFor(
            (CharacterHasSpEffect(chrEntityId, 49100)
                && (CharacterHasTeamType(chrEntityId2, TeamType.Human)
                    || CharacterHasTeamType(chrEntityId2, TeamType.WhitePhantom)
                    || CharacterHasTeamType(chrEntityId2, TeamType.Indiscriminate)
                    || CharacterHasTeamType(chrEntityId2, TeamType.Unknown77)
                    || CharacterHasTeamType(chrEntityId2, TeamType.Disabled)
                    || EventFlag(eventFlagId)))
                || CharacterHPValue(chrEntityId) <= 0);
        EndIf(CharacterHPValue(chrEntityId) <= 0);
        EnableCharacter(chrEntityId3);
        EnableCharacterCollision(chrEntityId3);
        EnableCharacterAI(chrEntityId3);
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId3, TargetEntityType.Character, chrEntityId, dummypolyId, chrEntityId, -1, -1);
        ForceAnimationPlayback(chrEntityId3, 60506, false, false, false);
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        WaitFor(ElapsedSeconds(2.4));
    }
L0:
    WaitFor(CharacterDead(chrEntityId3));
    WaitFor(ElapsedSeconds(10) || !EventFlag(eventFlagId2));
    SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
    InvokeEnemyGenerator(generatorEntityId);
    if (IsPlayerNo(1)) {
        WaitFor(!EventFlag(eventFlagId2));
        RestartEvent();
    }
    if (IsPlayerNo(2)) {
        WaitFor(!EventFlag(eventFlagId2));
        RestartEvent();
    }
    if (IsPlayerNo(3)) {
        WaitFor(!EventFlag(eventFlagId2));
        RestartEvent();
    }
});

$Event(99575468, Restart, function(chrEntityId, chrEntityId2, dummypolyId, generatorEntityId, eventFlagId, eventFlagId2) {
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    if (EventFlag(eventFlagId2)) {
        SetCharacterBackreadState(chrEntityId2, false);
        EnableCharacter(chrEntityId2);
        EnableCharacterCollision(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
    } else if (!CharacterDead(chrEntityId2)) {
        if (IsPlayerNo(1)) {
            WaitFor(HPRatio(chrEntityId2) > 0);
        }
        if (IsPlayerNo(2)) {
            WaitFor(HPRatio(chrEntityId2) > 0);
        }
        if (IsPlayerNo(3)) {
            WaitFor(HPRatio(chrEntityId2) > 0);
        }
        SetCharacterBackreadState(chrEntityId2, false);
        DisableCharacterCollision(chrEntityId2);
        DisableCharacterAI(chrEntityId2);
        ForceAnimationPlayback(chrEntityId2, 60507, false, false, false);
        if (!EventFlag(eventFlagId)) {
            DisableCharacter(chrEntityId2);
        }
        WaitFor(
            (CharacterHasSpEffect(chrEntityId, 49691) && EventFlag(eventFlagId))
                || CharacterHPValue(chrEntityId) <= 0);
        EndIf(CharacterHPValue(chrEntityId) <= 0);
        EnableCharacter(chrEntityId2);
        EnableCharacterCollision(chrEntityId2);
        EnableCharacterAI(chrEntityId2);
        WarpCharacterAndCopyFloorUnknown200489(chrEntityId2, TargetEntityType.Character, chrEntityId, dummypolyId, chrEntityId, -1, -1);
        ForceAnimationPlayback(chrEntityId2, 60506, false, false, false);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        WaitFor(ElapsedSeconds(2.4));
    }
L0:
    WaitFor(!CharacterHasSpEffect(chrEntityId, 49691));
    WaitFor(CharacterDead(chrEntityId2));
    WaitFor(ElapsedSeconds(10) || !EventFlag(eventFlagId2));
    SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
    InvokeEnemyGenerator(generatorEntityId);
    if (IsPlayerNo(1)) {
        WaitFor(!EventFlag(eventFlagId2));
        RestartEvent();
    }
    if (IsPlayerNo(2)) {
        WaitFor(!EventFlag(eventFlagId2));
        RestartEvent();
    }
    if (IsPlayerNo(3)) {
        WaitFor(!EventFlag(eventFlagId2));
        RestartEvent();
    }
    RestartEvent();
});

$Event(99575467, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    hp = CharacterHPValue(chrEntityId) <= 0;
    if (!mainGroupAbuse) {
        DisableCharacter(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    WaitFor(CharacterHPValue(chrEntityId) <= 0);
    if (!EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId2);
    }
    if (EventFlag(eventFlagId)) {
        SetSpEffect(chrEntityId2, 49118);
    }
    WaitFor(ElapsedFrames(5));
    ForceCharacterDeath(chrEntityId2, false);
});

$Event(99575471, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6) {
    DisableNetworkSync();
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    if (!CharacterHasSpEffect(chrEntityId, 49100)) {
        WaitFor(CharacterHasSpEffect(chrEntityId, 49100));
        DisplayTextEffectId(8000);
        WaitFor(ElapsedSeconds(5));
    }
L0:
    WaitFor(CharacterHasSpEffect(chrEntityId, 49135));
    if (EventFlag(eventFlagId)) {
        flag |= !EventFlag(eventFlagId2);
    }
    if (EventFlag(eventFlagId3)) {
        flag |= !EventFlag(eventFlagId4);
    }
    if (EventFlag(eventFlagId5)) {
        flag |= !EventFlag(eventFlagId6);
    }
    if (flag) {
        DisplayTextEffectId(8000);
    }
    WaitFor(ElapsedSeconds(5));
    RestartEvent();
});

$Event(99575470, Restart, function(chrEntityId, spEffectId, textEffectParamId) {
    DisableNetworkSync();
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    if (!CharacterHasSpEffect(chrEntityId, spEffectId)) {
        WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
        DisplayTextEffectId(textEffectParamId);
    }
L0:
    WaitFor(!CharacterHasSpEffect(chrEntityId, spEffectId));
    RestartEvent();
});

$Event(99575480, Restart, function(chrEntityId, chrEntityId2, spEffectId, spEffectId2, spEffectId3, spEffectId4, value) {
    DisableNetworkSync();
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    spCmp |= CharacterHasSpEffect(chrEntityId, spEffectId);
    cmpSp &= value != 0;
    sp |= CharacterHasSpEffect(chrEntityId2, spEffectId2);
    if (Signed(spEffectId3) != 0) {
        sp |= CharacterHasSpEffect(chrEntityId2, spEffectId3);
    }
    cmpSp &= sp;
    spCmp |= cmpSp;
    WaitFor(spCmp);
    if (CharacterHasSpEffect(chrEntityId, spEffectId)) {
        SetSpEffect(chrEntityId2, spEffectId2);
    }
    spHp |= !CharacterHasSpEffect(chrEntityId, spEffectId);
    sp2 &= !CharacterHasSpEffect(chrEntityId2, spEffectId2);
    if (Signed(spEffectId3) != 0) {
        sp2 &= !CharacterHasSpEffect(chrEntityId2, spEffectId3);
    }
    spHp |= sp2 || CharacterHPValue(chrEntityId) <= 0;
    WaitFor(spHp);
    if (!CharacterHasSpEffect(chrEntityId, spEffectId) || CharacterHPValue(chrEntityId) <= 0) {
        SetSpEffect(chrEntityId2, spEffectId4);
    }
    RestartEvent();
});

$Event(99575481, Restart, function(chrEntityId, chrEntityId2) {
    DisableNetworkSync();
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    WaitFor(
        (CharacterHasTeamType(chrEntityId2, TeamType.Human)
            || CharacterHasTeamType(chrEntityId2, TeamType.WhitePhantom)
            || CharacterHasTeamType(chrEntityId2, TeamType.Indiscriminate)
            || CharacterHasTeamType(chrEntityId2, TeamType.Unknown77)
            || CharacterHasTeamType(chrEntityId2, TeamType.Disabled))
            && (CharacterHasSpEffect(chrEntityId, 49690) || CharacterHasSpEffect(chrEntityId2, 49700)));
    if (CharacterHasSpEffect(chrEntityId, 49690)) {
        SetSpEffect(chrEntityId2, 49700);
    }
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 49690)
            || !CharacterHasSpEffect(chrEntityId2, 49700)
            || CharacterHPValue(chrEntityId) <= 0);
    if (!CharacterHasSpEffect(chrEntityId, 49690) || CharacterHPValue(chrEntityId) <= 0) {
        SetSpEffect(chrEntityId2, 49701);
    }
    RestartEvent();
});

$Event(99575483, Restart, function(chrEntityId) {
    DisableNetworkSync();
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 49695)
            || CharacterHasSpEffect(20000, 49753)
            || CharacterHasSpEffect(20000, 49754)
            || CharacterHasSpEffect(20000, 46755));
    if (CharacterHasSpEffect(chrEntityId, 49695)) {
        SetSpEffect(20000, 49753);
    }
    WaitFor(!CharacterHasSpEffect(chrEntityId, 49695) || CharacterHPValue(chrEntityId) <= 0);
    if (!CharacterHasSpEffect(chrEntityId, 49695) || CharacterHPValue(chrEntityId) <= 0) {
        SetSpEffect(20000, 49757);
    }
    RestartEvent();
});

$Event(99575482, Restart, function(chrEntityId) {
    DisableNetworkSync();
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    WaitFor(PlayersSoulLevel() >= 2);
    WaitFor(CharacterHasSpEffect(20000, 49758) || PlayersSoulLevel() <= 1);
    RestartIf(PlayersSoulLevel() == 1);
    DisplayTextEffectId(3107);
    WaitFor(!CharacterHasSpEffect(20000, 49758));
    RestartEvent();
});

$Event(90575551, Restart, function(chrEntityId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907610000);
        LinkToBossHealthBar(Disabled, 907610000, 0);
        LinkToBossHealthBar(Enabled, 907610000, chrEntityId);
        SetBossBGM(760000, BossBGMState.HeatUp);
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    WaitFor(EventFlag(7511));
    SetSpEffect(chrEntityId, 5108);
    SetBossBGM(760000, BossBGMState.HeatUp);
    ForceAnimationPlayback(chrEntityId, 20030, false, false, false);
    EnableCharacterAI(chrEntityId);
    LinkToBossHealthBar(Disabled, 907610000, 0);
    LinkToBossHealthBar(Enabled, 907610000, chrEntityId);
    WaitFor(ElapsedSeconds(4));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907610000);
});

$Event(90575651, Restart, function(chrEntityId) {
    if (EventFlag(7512)) {
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    if (EventFlag(7511)) {
        EnableCharacter(chrEntityId);
        EnableCharacterAI(chrEntityId);
        DisplayBossHealthBar(Enabled, chrEntityId, 0, 907620000);
        LinkToBossHealthBar(Disabled, 907620000, 0);
        LinkToBossHealthBar(Enabled, 907620000, chrEntityId);
        if (CharacterHasSpEffect(chrEntityId, 5106)) {
            SetBossBGM(490000, BossBGMState.HeatUp2);
            EndEvent();
        }
        if (CharacterHasSpEffect(chrEntityId, 5105)) {
            SetBossBGM(490000, BossBGMState.HeatUp);
            EndEvent();
        }
        EndEvent();
    }
    EnableCharacter(chrEntityId);
    DisableCharacterAI(chrEntityId);
    //DisableLockOnPoint(chrEntityId, 221);
    //DisableLockOnPoint(chrEntityId, 222);
    //DisableLockOnPoint(chrEntityId, 223);
    //DisableLockOnPoint(chrEntityId, 224);
    WaitFor(EventFlag(7510) || EventFlag(7511) || PlayerInMap(19, 0, 56, 0));
    ForceAnimationPlayback(chrEntityId, 30029, true, false, false);
    EnableCharacterAI(chrEntityId);
    //ActivateGparamOverride(4, 0);
    WaitFor(EventFlag(7511));
    ForceAnimationPlayback(chrEntityId, 20029, false, false, false);
    
    //EnableLockOnPoint(chrEntityId, 221);
    //EnableLockOnPoint(chrEntityId, 222);
    //EnableLockOnPoint(chrEntityId, 223);
    ///EnableLockOnPoint(chrEntityId, 224);
    //DeactivateGparamOverride(3);
    LinkToBossHealthBar(Disabled, 907620000, 0);
    LinkToBossHealthBar(Enabled, 907620000, chrEntityId);
    WaitFor(ElapsedSeconds(2.5));
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 907620000);
});

$Event(90575660, Restart, function(chrEntityId, spEffectId, spEffectId2, spEffectId3, bitNumber, npcPartHP, npcPartId, npcPartGroupIdx, npcPartId2, npcPartGroupIdx2, npcPartId3, npcPartGroupIdx3, npcPartId4, npcPartGroupIdx4, npcPartId5, npcPartGroupIdx5) {
    EndIf(EventFlag(7512));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) || CharacterHPValue(chrEntityId) <= 0);
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, npcPartHP, 1, 0.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 181, 181, 139, 139, 0);
    if (Signed(npcPartId2) != 0) {
        CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx2, npcPartHP, 1, 0.5, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 181, 181, 139, 139, 0);
    }
    if (Signed(npcPartId3) != 0) {
        CreateNPCPart(chrEntityId, npcPartId3, npcPartGroupIdx3, npcPartHP, 1, 0.5, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId3, 181, 181, 139, 139, 0);
    }
    if (Signed(npcPartId4) != 0) {
        CreateNPCPart(chrEntityId, npcPartId4, npcPartGroupIdx4, npcPartHP, 1, 0.5, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId4, 181, 181, 139, 139, 0);
    }
    if (Signed(npcPartId5) != 0) {
        CreateNPCPart(chrEntityId, npcPartId5, npcPartGroupIdx5, npcPartHP, 1, 0.5, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId5, 181, 181, 139, 139, 0);
    }
    if (Signed(npcPartId5) != 0) {
        UnknownNPCPart200493(chrEntityId, npcPartId, npcPartId2, npcPartId3, npcPartId4, npcPartId5);
    } else if (Signed(npcPartId4) != 0) {
        UnknownNPCPart200493(chrEntityId, npcPartId, npcPartId2, npcPartId3, npcPartId4, -1);
    } else if (Signed(npcPartId3) != 0) {
        UnknownNPCPart200493(chrEntityId, npcPartId, npcPartId2, npcPartId3, -1, -1);
    } else if (Signed(npcPartId2) != 0) {
        UnknownNPCPart200493(chrEntityId, npcPartId, npcPartId2, -1, -1, -1);
    } else {
        UnknownNPCPart200493(chrEntityId, npcPartId, -1, -1, -1, -1);
    }
L0:
    hpSp |= NPCPartHP(chrEntityId, npcPartId) <= 0;
    if (Signed(npcPartId2) != 0) {
        hpSp |= NPCPartHP(chrEntityId, npcPartId2) <= 0;
    }
    if (Signed(npcPartId3) != 0) {
        hpSp |= NPCPartHP(chrEntityId, npcPartId3) <= 0;
    }
    if (Signed(npcPartId4) != 0) {
        hpSp |= NPCPartHP(chrEntityId, npcPartId4) <= 0;
    }
    if (Signed(npcPartId5) != 0) {
        hpSp |= NPCPartHP(chrEntityId, npcPartId5) <= 0;
    }
    hpSp |= !CharacterHasSpEffect(chrEntityId, spEffectId) || CharacterHPValue(chrEntityId) <= 0;
    WaitFor(hpSp);
    EndIf(CharacterHPValue(chrEntityId) <= 0);
    SetSpEffect(chrEntityId, spEffectId2);
    SetSpEffect(chrEntityId, spEffectId3);
    ChangeCharacterDispmask(chrEntityId, bitNumber, OFF);
    SetNPCPartHP(chrEntityId, npcPartId, 0, false);
    if (Signed(npcPartId2) != 0) {
        SetNPCPartHP(chrEntityId, npcPartId2, 0, false);
    }
    if (Signed(npcPartId3) != 0) {
        SetNPCPartHP(chrEntityId, npcPartId3, 0, false);
    }
    if (Signed(npcPartId4) != 0) {
        SetNPCPartHP(chrEntityId, npcPartId4, 0, false);
    }
    if (Signed(npcPartId5) != 0) {
        SetNPCPartHP(chrEntityId, npcPartId5, 0, false);
    }
    WaitFor(ElapsedSeconds(3));
    RestartEvent();
});

$Event(90575652, Restart, function(chrEntityId, spEffectId, spEffectId2) {
    DisableNetworkSync();
    EndIf(EventFlag(7512));
    EndIf(CharacterHasSpEffect(chrEntityId, spEffectId2));
    WaitFor(EventFlag(7511));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, spEffectId)
            || CharacterHasSpEffect(chrEntityId, spEffectId2)
            || EventFlag(7512));
    EndIf(CharacterHasSpEffect(chrEntityId, spEffectId2));
    EndIf(EventFlag(7512));
    SetBossBGM(490000, BossBGMState.HeatUp);
    WaitFor(
        !BossBGMPlaying(490000) || CharacterHasSpEffect(chrEntityId, spEffectId2) || EventFlag(7512));
    EndIf(CharacterHasSpEffect(chrEntityId, spEffectId2));
    EndIf(EventFlag(7512));
    RestartEvent();
});
