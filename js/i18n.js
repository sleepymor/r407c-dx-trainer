const I18N = {
  en: {
    // page
    title: "R407C DX Trainer",
    mode_sim: "Simulate",
    mode_dx: "Diagnose",
    unit_si: "bar °C",
    unit_im: "psi °F",

    // sim card
    sim_create_fault: "Create a fault",
    sim_events_note: "Events: pressure drops suddenly, then returns to normal.",
    sim_diagnose_mode: "Diagnose mode",
    sim_dx_intro: "Type your gauge and thermometer readings below. The values from your last simulation are the starting point.",

    // readings card
    rd_title: "Readings at each point",

    // calculated card
    calc_title: "Calculated values",
    calc_note: "R407C is a zeotropic blend: superheat uses the dew point, subcooling uses the bubble point. The pressure model is approximate (about ±5%), so confirm with your manufacturer's PT chart.",

    // odps card
    odps_title: "ODPS: Kriwan DELTA-P II 22 S 635",
    odps_nameplate: "Nameplate: supply 115/230 V AC 50/60 Hz, ambient -30 to +70 °C, relay 240 V AC max 2.5 A. It screws into the Dorin oil pump housing and opens its relay if oil differential pressure stays below the cut-out for the whole delay time. Defaults: 0.8 bar cut-out and 90 s delay, as set by your team. Cut-in is assumed to be cut-out + 0.32 bar. A shorter delay makes training faster.",
    odps_cutout: "Cut-out ΔP",
    odps_delay: "Delay (s)",
    odps_reset: "Reset ODPS",

    // trend card
    trend_title: "Suction pressure trend",
    trend_start: "Start an event above to watch a sudden low-pressure drop and the recovery.",

    // ph card
    ph_title: "P-h diagram",
    ph_note: "Solid: current cycle. Dashed grey: healthy cycle. Points 1 suction, 2 discharge, 3 liquid out, 4 after TXV.",
    ph_axis_h: "h (kJ/kg)",
    ph_axis_p: "P bar abs",

    // diagnosis card
    dg_title: "Likely causes and checklist",

    // report card
    rep_title: "Service report",
    rep_tag: "Unit tag or site",
    rep_tech: "Technician",
    rep_notes: "Notes",
    rep_print: "Print or save PDF",
    rep_copy: "Copy text",
    rep_copied: "Copied",
    rep_copy_blocked: "Copy blocked: select the report text",

    // readings labels
    lbl_amb: "Ambient air",
    lbl_ret: "Return air",
    lbl_sup: "Supply air",
    lbl_Ps: "1 Suction P",
    lbl_Ts: "1 Suction line",
    lbl_Pd: "2 Discharge P",
    lbl_Td: "2 Discharge line",
    lbl_Tl1: "3 Liquid before drier",
    lbl_Tl2: "4 Liquid after drier",
    lbl_Toil: "5 Oil sump",
    lbl_dp: "5 Oil differential P (ODPS)",
    lbl_oil: "5 Oil level",

    // units
    unit_bar: "bar",
    unit_psi: "psi",
    unit_C: "°C",
    unit_F: "°F",
    unit_pct: "%",

    // calculated labels
    calc_Te: "Evaporating dew °C",
    calc_Tc: "Condensing dew °C",
    calc_SH: "Superheat K",
    calc_SC: "Subcooling K",
    calc_APP: "Condenser approach K",
    calc_dr: "Drier ΔT K",
    calc_dA: "Air ΔT across coil K",
    calc_dp: "Oil differential (ODPS) bar",

    // alarms
    alarm_hp: "HP cut-out",
    alarm_hp_wa: "High head pressure",
    alarm_lp: "LP cut-out",
    alarm_freeze: "Coil freeze risk",
    alarm_discharge: "Discharge temp trip",
    alarm_discharge_wa: "High discharge temp",
    alarm_oil_trip: "Low oil trip",
    alarm_oil_wa: "Low oil level",
    alarm_oil_temp: "High oil temp",
    alarm_odps_trip: "ODPS tripped: compressor locked out",
    alarm_odps_timer: "ODPS timer {t} / {d} s",
    alarm_odps_low: "Low oil differential",
    alarm_sh_wa: "Liquid slugging risk",
    alarm_sh_hi: "High superheat",
    alarm_ok: "No alarms",
    odps_status_trip: "ODPS TRIP",
    odps_status_timer: "ODPS {t} s",
    odps_status_ok: "ODPS ok",
    odps_report_trip: "Tripped: relay open, compressor locked out until you press Reset.",
    odps_report_timer: "Below cut-out: timer {t} of {d} s.",
    odps_report_ok: "Normal: relay closed. Cut-in {ci} {u}.",
    odps_cutin_label: "Cut-in",

    // sliders
    sl_charge: "Refrigerant charge",
    sl_drier: "Filter drier restriction",
    sl_txv: "TXV opening",
    sl_foul: "Condenser fouling",
    sl_fan: "Condenser fan speed",
    sl_air: "Evaporator airflow",
    sl_wear: "Compressor valve wear",
    sl_oil: "Oil level",

    // preset buttons
    preset_healthy: "Healthy",
    preset_leak: "Leak (70% charge)",
    preset_drier: "Clogged drier",
    preset_txvc: "TXV stuck closed",
    preset_txvo: "TXV stuck open",
    preset_cond: "Dirty condenser",
    preset_fan: "Fan failure",
    preset_comp: "Weak compressor",
    preset_oil: "Low oil",
    preset_over: "Overcharge",
    preset_airfilter: "Dirty air filter",
    preset_evapfan: "Evap fan failed",

    // events
    ev_ice: "Sudden drop: ice plug at TXV",
    ev_fan: "Sudden drop: evap fan stops",
    ev_sol: "Sudden drop: solenoid sticks",
    ev_running: "Event running: {name}…",
    ev_back: "Back to normal. Pattern: {hint}",

    // diagnosis causes (FX keys: leak, over, drier, txvc, txvo, cond, comp, air, oil, sol)
    fx_leak_title: "Low charge or refrigerant leak",
    fx_leak_desc: "The evaporator is starved (high superheat, low suction pressure) and the condenser outlet runs out of liquid (subcooling near 0, flash gas). The compressor runs hot; expect LP trip or coil icing.",
    fx_over_title: "Overcharge",
    fx_over_desc: "Excess liquid backs up in the condenser: subcooling and head pressure rise, the compressor works harder, flood-back is possible.",
    fx_drier_title: "Clogged filter drier",
    fx_drier_desc: "The restriction flashes liquid, so the outlet is colder than the inlet. Everything downstream is starved: superheat up, suction pressure low, coil may ice.",
    fx_txvc_title: "TXV stuck closed or underfeeding",
    fx_txvc_desc: "The valve passes too little refrigerant: high superheat and low suction pressure, but subcooling stays normal or high and there is no temperature drop across the drier.",
    fx_txvo_title: "TXV stuck open or overfeeding",
    fx_txvo_desc: "Too much liquid enters the evaporator: superheat near 0, suction pressure high, cold suction line. Liquid slugging can damage the compressor.",
    fx_cond_title: "Dirty condenser or fan failure",
    fx_cond_desc: "Poor heat rejection: condensing temperature climbs far above ambient (approach above 20 K), head pressure and discharge temperature rise, HP trip likely.",
    fx_comp_title: "Worn compressor valves",
    fx_comp_desc: "Gas leaks back internally: suction pressure rises, discharge pressure drops, discharge temperature is high for the pressure ratio, capacity is lost.",
    fx_air_title: "Low evaporator airflow",
    fx_air_desc: "Less air crosses the coil, so the coil runs too cold: suction pressure falls, superheat drops toward 0, the air temperature drop gets too large and the coil may ice. Liquid can flood back to the compressor.",
    fx_oil_title: "Low oil or oil return problem",
    fx_oil_desc: "Poor lubrication: low oil level and a hot sump risk bearing wear and an oil-pressure trip.",
    fx_leak_check1: "Leak-check flares, joints, Schrader cores, drier and TXV bulb fittings.",
    fx_leak_check2: "Look for oil stains and bubbles in the sight glass.",
    fx_leak_check3: "Repair, evacuate below 500 microns and hold the vacuum.",
    fx_leak_check4: "Charge R407C as liquid only (zeotropic blend, never from vapor).",
    fx_leak_check5: "Verify SH 5–8 K and SC 4–8 K at full load.",
    fx_leak_check6: "Rule out non-condensables.",
    fx_over_check1: "Confirm the condenser is clean and the fans run first.",
    fx_over_check2: "Recover small amounts of R407C and watch SC.",
    fx_over_check3: "Target SC 4–8 K and normal head pressure.",
    fx_over_check4: "Rule out non-condensables.",
    fx_drier_check1: "Measure ΔT across the drier (above 2 K is suspect).",
    fx_drier_check2: "Look for frost or a cold spot on the drier outlet.",
    fx_drier_check3: "Isolate, recover and replace the drier.",
    fx_drier_check4: "Evacuate, recharge and check oil for moisture or acid.",
    fx_drier_check5: "Find the source: debris, moisture or burnout.",
    fx_txvc_check1: "Check the bulb: clamp, insulation and position on the suction line.",
    fx_txvc_check2: "A cold bulb with no pressure means lost bulb charge.",
    fx_txvc_check3: "Check the S.Valve opens and the strainer is clean.",
    fx_txvc_check4: "Adjust SH to 5–8 K or replace the TXV.",
    fx_txvo_check1: "Check bulb contact and insulation; a loose or wet bulb overfeeds.",
    fx_txvo_check2: "Check debris is not holding the valve open.",
    fx_txvo_check3: "Look for frost-back on the suction line and accumulator.",
    fx_txvo_check4: "Reset SH to 5–8 K or replace the TXV.",
    fx_cond_check1: "Check fan rotation, speed, capacitor, contactor and overload.",
    fx_cond_check2: "Inspect and wash the coil; clear airflow and hot-air recirculation.",
    fx_cond_check3: "Compare ambient with the 40 °C design condition.",
    fx_cond_check4: "If the coil is clean, check for non-condensables.",
    fx_comp_check1: "Run a pump-down test: suction should fall and hold.",
    fx_comp_check2: "Compare running amps with the nameplate.",
    fx_comp_check3: "Check oil colour for wear metals.",
    fx_comp_check4: "Repair or replace the compressor.",
    fx_air_check1: "Check the air filters and replace at the spec change-out differential (pre-filter 100 Pa, final filter 300 Pa).",
    fx_air_check2: "Check supply fan rotation, belt tension and VSD speed.",
    fx_air_check3: "Look for an iced coil, closed dampers or blocked supply and return.",
    fx_air_check4: "Clean the coil, thaw if iced, then recheck SH 5–8 K and air ΔT 10–14 K.",
    fx_oil_check1: "Check the sight glass and the oil separator return line.",
    fx_oil_check2: "Check the ODPS (Kriwan DELTA-P II 22 S 635): 115/230 V supply present, relay closed while running, opens only after the delay below cut-out. Reset button clears a lockout.",
    fx_oil_check3: "Check the crankcase heater and sump temperature.",
    fx_oil_check4: "Check for refrigerant dilution or slugging.",
    fx_oil_check5: "Confirm SH and suction velocity, then top up with the approved POE oil.",
    fx_sol_title: "Solenoid (S.Valve) sticks",
    fx_sol_desc: "The liquid solenoid closes briefly and starves the TXV. Check coil voltage, plunger and strainer.",
    fx_sol_check1: "Check coil voltage, plunger and strainer.",
    fx_sol_check2: "Look for frost-back on the suction line and accumulator.",
    fx_sol_check3: "Reset SH to 5–8 K or replace the solenoid valve.",

    // report
    rep_h2: "R407C DX service report",
    rep_meta: "Source: {source} (pressures gauge)",
    rep_readings: "Readings",
    rep_calculated: "Calculated",
    rep_alarms: "Alarms",
    rep_likely: "Likely causes",
    rep_checks: "Checks for the top cause",
    rep_events: "Events",
    rep_notes_label: "Notes",
    rep_none: "None",
    rep_none_recorded: "None recorded",
    rep_disclaimer: "Pressure model is approximate; confirm with manufacturer data.",
    rep_healthy: "Cycle looks healthy. Superheat and subcooling are in range. Create a fault or type different readings to practise.",
    rep_date_label: "Unit not named",
    rep_tech_label: "technician not named",

    // controls
    btn_print: "Print or save PDF",
    btn_copy: "Copy text",
    lang_en: "EN",
    lang_de: "DE"
  },
  de: {
    // page
    title: "R407C DX Trainer",
    mode_sim: "Simulation",
    mode_dx: "Diagnose",
    unit_si: "bar °C",
    unit_im: "psi °F",

    // sim card
    sim_create_fault: "Fehler erzeugen",
    sim_events_note: "Ereignisse: Druck fällt plötzlich, dann normalisiert er sich.",
    sim_diagnose_mode: "Diagnose-Modus",
    sim_dx_intro: "Geben Sie Ihre Manometer- und Thermometerwerte ein. Die Werte Ihrer letzten Simulation sind der Ausgangspunkt.",

    // readings card
    rd_title: "Messwerte an jedem Punkt",

    // calculated card
    calc_title: "Berechnete Werte",
    calc_note: "R407C ist ein zeotropes Gemisch: Überhitzung benutzt den Taupunkt, Unterkühlung den Blubberpunkt. Das Druckmodell ist annähernd (ca. ±5 %), bestätigen Sie es mit dem PT-Diagramm des Herstellers.",

    // odps card
    odps_title: "ODPS: Kriwan DELTA-P II 22 S 635",
    odps_nameplate: "Namensschild: Versorgung 115/230 V AC 50/60 Hz, Umgebung -30 bis +70 °C, Relais 240 V AC max. 2,5 A. Es wird in das Dorin-Ölpumpengehäuse geschraubt und öffnet sein Relais, wenn der Öldifferenzdruck länger als die Verzögerungszeit unter dem Ausschaltwert bleibt. Voreinstellungen: 0,8 bar Ausschaltwert und 90 s Verzögerung, wie von Ihrem Team eingestellt. Wiedereinschaltung wird als Ausschaltwert + 0,32 bar angenommen. Eine kürzere Verzögerung macht das Training schneller.",
    odps_cutout: "Ausschalt-ΔP",
    odps_delay: "Verzögerung (s)",
    odps_reset: "ODPS zurücksetzen",

    // trend card
    trend_title: "Saugdruck-Trend",
    trend_start: "Starten Sie ein Ereignis oben, um einen plötzlichen Niederdruckabfall und die Erholung zu beobachten.",

    // ph card
    ph_title: "P-h-Diagramm",
    ph_note: "Durchgehend: aktueller Kreisprozess. Grau gestrichelt: gesunder Kreisprozess. Punkte 1 Saugseite, 2 Druckseite, 3 Flüssigabgang, 4 nach TXV.",
    ph_axis_h: "h (kJ/kg)",
    ph_axis_p: "P bar abs",

    // diagnosis card
    dg_title: "Wahrscheinliche Ursachen und Checkliste",

    // report card
    rep_title: "Servicebericht",
    rep_tag: "Gerät oder Standort",
    rep_tech: "Techniker",
    rep_notes: "Notizen",
    rep_print: "Drucken oder als PDF speichern",
    rep_copy: "Text kopieren",
    rep_copied: "Kopiert",
    rep_copy_blocked: "Kopieren blockiert: Berichtstext auswählen",

    // readings labels
    lbl_amb: "Umgebungsluft",
    lbl_ret: "Zuluft",
    lbl_sup: "Fortluft",
    lbl_Ps: "1 Saugdruck P",
    lbl_Ts: "1 Saugleitung",
    lbl_Pd: "2 Druckseitendruck P",
    lbl_Td: "2 Druckseiteleitung",
    lbl_Tl1: "3 Flüssigkeit vor Trockner",
    lbl_Tl2: "4 Flüssigkeit nach Trockner",
    lbl_Toil: "5 Ölsumpf",
    lbl_dp: "5 Öldifferenzdruck (ODPS)",
    lbl_oil: "5 Ölstand",

    // units
    unit_bar: "bar",
    unit_psi: "psi",
    unit_C: "°C",
    unit_F: "°F",
    unit_pct: "%",

    // calculated labels
    calc_Te: "Verdampfungstaupunkt °C",
    calc_Tc: "Verflüssigungstaupunkt °C",
    calc_SH: "Überhitzung K",
    calc_SC: "Unterkühlung K",
    calc_APP: "Kondenzator-Annäherung K",
    calc_dr: "Trockner-ΔT K",
    calc_dA: "Luft-ΔT am Verdampfer K",
    calc_dp: "Öldifferenzdruck (ODPS) bar",

    // alarms
    alarm_hp: "HP-Abschaltung",
    alarm_hp_wa: "Hoher Kopfdruck",
    alarm_lp: "LP-Abschaltung",
    alarm_freeze: "Gefriergefahr Verdampfer",
    alarm_discharge: "Abgastemperatur-Abschaltung",
    alarm_discharge_wa: "Hohe Abgastemperatur",
    alarm_oil_trip: "Ölmangel-Abschaltung",
    alarm_oil_wa: "Niedriger Ölstand",
    alarm_oil_temp: "Hohe Öltemperatur",
    alarm_odps_trip: "ODPS ausgelöst: Kompressor gesperrt",
    alarm_odps_timer: "ODPS-Timer {t} / {d} s",
    alarm_odps_low: "Niedriger Öldifferenzdruck",
    alarm_sh_wa: "Flüssigschlaggefahr",
    alarm_sh_hi: "Hohe Überhitzung",
    alarm_ok: "Keine Alarme",
    odps_status_trip: "ODPS AUSLÖST",
    odps_status_timer: "ODPS {t} s",
    odps_status_ok: "ODPS OK",
    odps_report_trip: "Ausgelöst: Relais offen, Kompressor gesperrt bis zum Zurücksetzen.",
    odps_report_timer: "Unter Ausschaltwert: Timer {t} von {d} s.",
    odps_report_ok: "Normal: Relais geschlossen. Wiedereinschalten bei {ci} {u}.",
    odps_cutin_label: "Wiedereinschaltung",

    // sliders
    sl_charge: "Kältemittelfüllmenge",
    sl_drier: "Filtertrockner-Beschränkung",
    sl_txv: "TXV-Öffnung",
    sl_foul: "Kondensator-Verschmutzung",
    sl_fan: "Kondensator-Lüftergeschwindigkeit",
    sl_air: "Verdampfer-Luftdurchsatz",
    sl_wear: "Kompressorventil-Verschleiß",
    sl_oil: "Ölstand",

    // preset buttons
    preset_healthy: "Gesund",
    preset_leak: "Undichtigkeit (70 % Füllmenge)",
    preset_drier: "Verstopfter Trockner",
    preset_txvc: "TXV verklemmt geschlossen",
    preset_txvo: "TXV verklemmt offen",
    preset_cond: "Verschmutzter Kondensator",
    preset_fan: "Lüfterausfall",
    preset_comp: "Schwacher Kompressor",
    preset_oil: "Ölmangel",
    preset_over: "Überfüllung",
    preset_airfilter: "Verschmutzter Luftfilter",
    preset_evapfan: "Verdampferlüfter defekt",

    // events
    ev_ice: "Plötzlicher Abfall: Eispropfen am TXV",
    ev_fan: "Plötzlicher Abfall: Verdampferlüfter stoppt",
    ev_sol: "Plötzlicher Abfall: Magnetventil bleibt hängen",
    ev_running: "Ereignis läuft: {name}…",
    ev_back: "Wieder normal. Muster: {hint}",

    // diagnosis causes
    fx_leak_title: "Niedrige Füllmenge oder Kältemittelverlust",
    fx_leak_desc: "Der Verdampfer ist unterversorgt (hohe Überhitzung, niedriger Saugdruck) und der Kondensatorausgang läuft leer (Unterkühlung nahe 0, Flashgas). Der Kompressor läuft heiß; rechnen Sie mit LP-Abschaltung oder Vereisung.",
    fx_over_title: "Überfüllung",
    fx_over_desc: "Überschüssige Flüssigkeit staut sich im Kondensator: Unterkühlung und Kopfdruck steigen, der Kompressor arbeitet härter, Flüssigrücklauf möglich.",
    fx_drier_title: "Verstopfter Filtertrockner",
    fx_drier_desc: "Die Verblendung flasht Flüssigkeit, deshalb ist der Auslass kälter als der Einlass. Alles danach ist unterversorgt: Überhitzung hoch, Saugdruck niedrig, Verdampfer kann vereisen.",
    fx_txvc_title: "TXV verklemmt geschlossen oder unterfördernd",
    fx_txvc_desc: "Das Ventil gibt zu wenig Kältemittel ab: hohe Überhitzung und niedriger Saugdruck, aber Unterkühlung normal oder hoch und kein Temperaturabfall über den Trockner.",
    fx_txvo_title: "TXV verklemmt offen oder überfördernd",
    fx_txvo_desc: "Zu viel Flüssigkeit gelangt in den Verdampfer: Überhitzung nahe 0, hoher Saugdruck, kalte Saugleitung. Flüssigrücklauf kann den Kompressor beschädigen.",
    fx_cond_title: "Verschmutzter Kondensator oder Lüfterausfall",
    fx_cond_desc: "Schlechte Wärmeabgabe: Verflüssigungstemperatur steigt weit über Umgebungstemperatur (Annäherung über 20 K), Kopfdruck und Abgastemperatur steigen, HP-Abschaltung wahrscheinlich.",
    fx_comp_title: "Abgenutzte Kompressorventile",
    fx_comp_desc: "Gas leckt intern zurück: Saugdruck steigt, Druckseitendruck sinkt, Abgastemperatur hoch für das Druckverhältnis, Leistung verloren.",
    fx_air_title: "Niedriger Verdampfer-Luftdurchsatz",
    fx_air_desc: "Weniger Luft strömt über den Verdampfer, dieser läuft zu kalt: Saugdruck fällt, Überhitzung sinkt auf 0, der Lufttemperaturabfall ist zu groß, Verdampfer kann vereisen. Flüssigkeit kann zum Kompressor zurückschlagen.",
    fx_oil_title: "Ölmangel oder Ölrücklaufproblem",
    fx_oil_desc: "Schlechte Schmierung: niedriger Ölstand und heißer Sumpf riskieren Lagerverschleiß und Öldruckabschaltung.",
    fx_leak_check1: "Prüfen Sie Anschlüsse, Schrader-Ventile, Trockner und TXV-Bulb-Fittings auf Undichtigkeit.",
    fx_leak_check2: "Achten Sie auf Ölflecken und Bläschen im Sichtglas.",
    fx_leak_check3: "Reparieren Sie, evakuieren Sie unter 500 Mikron und halten Sie das Vakuum.",
    fx_leak_check4: "Laden Sie R407C nur als Flüssigkeit (zeotropes Gemisch, niemals als Dampf).",
    fx_leak_check5: "Überprüfen Sie SH 5–8 K und SC 4–8 K bei Vollast.",
    fx_leak_check6: "Schließen Sie Nichtkondensierbare aus.",
    fx_over_check1: "Bestätigen Sie, dass der Kondensator sauber und die Lüfter laufen.",
    fx_over_check2: "Entnehmen Sie kleine Mengen R407C und beobachten Sie SC.",
    fx_over_check3: "Ziel SC 4–8 K und normaler Kopfdruck.",
    fx_over_check4: "Schließen Sie Nichtkondensierbare aus.",
    fx_drier_check1: "Messen Sie ΔT über den Trockner (über 2 K ist verdächtig).",
    fx_drier_check2: "Achten Sie auf Reif oder eine kalte Stelle am Trocknerauslass.",
    fx_drier_check3: "Isolieren, Kältemittel entnehmen und Trockner austauschen.",
    fx_drier_check4: "Evakuieren, neu laden und Öl auf Feuchtigkeit oder Säure prüfen.",
    fx_drier_check5: "Quelle finden: Schmutz, Feuchtigkeit oder Kompressorschaden.",
    fx_txvc_check1: "Prüfen Sie das Bulb: Klemme, Isolierung und Position an der Saugleitung.",
    fx_txvc_check2: "Ein kaltes Bulb ohne Druck bedeutet verlorene Bulb-Füllung.",
    fx_txvc_check3: "Prüfen Sie, ob das S.Valve öffnet und das Sieb sauber ist.",
    fx_txvc_check4: "Stellen Sie SH auf 5–8 K oder tauschen Sie den TXV.",
    fx_txvo_check1: "Prüfen Sie Bulb-Kontakt und Isolierung; ein lockeres oder nasses Bulb überfördernd.",
    fx_txvo_check2: "Prüfen Sie, ob Schmutz das Ventil offen hält.",
    fx_txvo_check3: "Achten Sie auf Vereisung der Saugleitung und des Akkumulators.",
    fx_txvo_check4: "Setzen Sie SH auf 5–8 K zurück oder tauschen Sie den TXV.",
    fx_cond_check1: "Prüfen Sie Lüfterdrehzahl, Kondensator, Kontaktor und Überlastrelais.",
    fx_cond_check2: "Reinigen Sie die Kühlfläche; sorgen Sie für Durchströmung und vermeiden Sie Warmluftrückführung.",
    fx_cond_check3: "Vergleichen Sie Umgebungstemperatur mit den 40 °C Auslegungsbedingungen.",
    fx_cond_check4: "Bei sauberer Kühlfläche auf Nichtkondensierbare prüfen.",
    fx_comp_check1: "Führen Sie einen Pump-down-Test durch: Saugdruck sollte fallen und halten.",
    fx_comp_check2: "Vergleichen Sie den Stromverbrauch mit dem Typenschild.",
    fx_comp_check3: "Prüfen Sie die Ölfarbe auf Abriebteilchen.",
    fx_comp_check4: "Kompressor reparieren oder austauschen.",
    fx_air_check1: "Prüfen Sie die Luftfilter und tauschen Sie sie am angegebenen Druckdifferenz (Vorfilter 100 Pa, Feinfilter 300 Pa).",
    fx_air_check2: "Prüfen Sie Zufuhrlüfter, Riemenspannung und VSD-Geschwindigkeit.",
    fx_air_check3: "Achten Sie auf einen vereisten Verdampfer, geschlossene Drosselklappen oder blockierte Zufuhr-/Abströmung.",
    fx_air_check4: "Reinigen Sie den Verdampfer, auftauen wenn vereist, dann SH 5–8 K und Luft-ΔT 10–14 K nachprüfen.",
    fx_oil_check1: "Prüfen Sie das Sichtglas und die Ölabscheiderrücklaufleitung.",
    fx_oil_check2: "Prüfen Sie den ODPS (Kriwan DELTA-P II 22 S 635): 115/230 V Versorgung vorhanden, Relais geschlossen während des Betriebs, öffnet erst nach der Verzögerung unter dem Ausschaltwert. Reset-Taste löscht eine Sperre.",
    fx_oil_check3: "Prüfen Sie Kurbelwellenheizer und Sumpftemperatur.",
    fx_oil_check4: "Prüfen Sie auf Kältemittelverdünnung oder Flüssigansaugen.",
    fx_oil_check5: "Bestätigen Sie SH und Sauggeschwindigkeit, dann mit zugelassenem POE-Öl nachfüllen.",
    fx_sol_title: "Magnetventil (S.Valve) bleibt hängen",
    fx_sol_desc: "Das Flüssigmagnetventil schließt kurzzeitig und hungert den TXV aus. Prüfen Sie Spulenspannung, Kolben und Sieb.",
    fx_sol_check1: "Prüfen Sie Spulenspannung, Kolben und Sieb.",
    fx_sol_check2: "Achten Sie auf Vereisung der Saugleitung und des Akkumulators.",
    fx_sol_check3: "Setzen Sie SH auf 5–8 K zurück oder tauschen Sie das Magnetventil.",

    // report
    rep_h2: "R407C DX Servicebericht",
    rep_meta: "Quelle: {source} (Drücke manometrisch)",
    rep_readings: "Messwerte",
    rep_calculated: "Berechnet",
    rep_alarms: "Alarme",
    rep_likely: "Wahrscheinliche Ursachen",
    rep_checks: "Prüfungen für die Hauptursache",
    rep_events: "Ereignisse",
    rep_notes_label: "Notizen",
    rep_none: "Keine",
    rep_none_recorded: "Keine aufgezeichnet",
    rep_disclaimer: "Druckmodell ist annähernd; bestätigen Sie es mit Herstellerdaten.",
    rep_healthy: "Kreisprozess sieht gesund aus. Überhitzung und Unterkühlung sind im Bereich. Erzeugen Sie einen Fehler oder geben Sie andere Werte ein zum Üben.",
    rep_date_label: "Gerät nicht benannt",
    rep_tech_label: "Techniker nicht benannt",

    // controls
    btn_print: "Drucken oder als PDF speichern",
    btn_copy: "Text kopieren",
    lang_en: "EN",
    lang_de: "DE"
  }
};

let currentLang = (localStorage.getItem("r407c-lang") || navigator.language || "en").startsWith("de") ? "de" : "en";

function t(key, params) {
  let s = I18N[currentLang][key] || I18N.en[key] || key;
  if (params) {
    Object.keys(params).forEach(k => { s = s.replace(new RegExp("{" + k + "}", "g"), params[k]); });
  }
  return s;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("r407c-lang", lang);
  document.documentElement.lang = lang;
  applyLang();
}

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const [attr, key] = el.getAttribute("data-i18n-attr").split("|");
    el.setAttribute(attr, t(key));
  });
  document.title = t("title");
  const btn = $("#langBtn");
  if (btn) btn.textContent = currentLang === "de" ? t("lang_en") : t("lang_de");
}
