const I18N = {
  en: {
    // page
    title: "R407C DX Trainer",
    mode_sim: "Simulate",
    mode_dx: "Diagnose",
    mode_challenge: "Challenge",
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
    chk_nm: "Not measured",

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
    sl_nc: "Non-condensables (air/N2)",

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
    preset_nc: "Non-condensables (air/N2)",

    // events
    ev_ice: "Sudden drop: ice plug at TXV",
    ev_fan: "Sudden drop: evap fan stops",
    ev_sol: "Sudden drop: solenoid sticks",
    ev_running: "Event running: {name}…",
    ev_back: "Back to normal. Pattern: {hint}",

    // challenge mode
    ch_title: "Challenge / Exam Mode",
    ch_intro: "A random fault has been created. Sliders are hidden. Diagnose the fault and pick 3 priority repair steps, then submit.",
    ch_fault_hidden: "Fault hidden — diagnose from the readings above.",
    ch_your_diagnosis: "Your diagnosis",
    ch_priority_steps: "Priority repair steps (pick 3)",
    ch_submit: "Submit Diagnosis",
    ch_score: "Score",
    ch_correct: "Correct diagnosis!",
    ch_wrong: "Incorrect. The fault was: {fault}",
    ch_technical: "Technical discussion",
    ch_optional_sensor: "Optional / not measured",
    ch_diag_healthy: "Healthy",
    ch_step_0: "Leak-check, repair, evacuate and recharge",
    ch_step_1: "Recover excess refrigerant, target SC 4–8 K",
    ch_step_2: "Replace clogged filter drier",
    ch_step_3: "Adjust or replace TXV (set SH 5–8 K)",
    ch_step_4: "Clean condenser / restore fan airflow",
    ch_step_5: "Repair or replace compressor",
    ch_step_6: "Top up oil / fix oil return, reset ODPS",
    ch_step_7: "Improve evaporator airflow / replace filter",
    ch_step_8: "Replace sticking solenoid valve",

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
    fx_nc_title: "Non-condensables (air / nitrogen)",
    fx_nc_desc: "Inerts accumulate in the condenser: head pressure and discharge temperature rise, condenser approach worsens, subcooling reads falsely normal/high, and discharge pressure fluctuates.",
    fx_nc_check1: "Check for non-condensables with a gauge/top-temperature comparison.",
    fx_nc_check2: "Recover refrigerant, evacuate and recharge.",
    fx_nc_check3: "Rule out air introduced during poor service practices.",

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
    btn_theme: "Dark / Light Theme",
    btn_reset_healthy: "Reset Healthy",
    btn_test_odps: "Test ODPS Delay",
    lang_en: "EN",
    lang_id: "ID"
  },
  id: {
    // page
    title: "R407C DX Trainer",
    mode_sim: "Simulasi",
    mode_dx: "Diagnosa",
    mode_challenge: "Tantangan",
    unit_si: "bar °C",
    unit_im: "psi °F",

    // sim card
    sim_create_fault: "Buat kerusakan",
    sim_events_note: "Peristiwa: tekanan tiba-tiba turun, lalu kembali normal.",
    sim_diagnose_mode: "Mode diagnosa",
    sim_dx_intro: "Ketik bacaan manometer dan termometer Anda di bawah ini. Nilai dari simulasi terakhir Anda adalah titik awal.",

    // readings card
    rd_title: "Bacaan di setiap titik",

    // calculated card
    calc_title: "Nilai yang dihitung",
    calc_note: "R407C adalah campuran zeotrop: superheat menggunakan titik embun, subcooling menggunakan titik ubur. Model tekanan adalah perkiraan (sekitar ±5%), konfirmasikan dengan PT chart pabrik.",

    // odps card
    odps_title: "ODPS: Kriwan DELTA-P II 22 S 635",
    odps_nameplate: "Nameplate: supply 115/230 V AC 50/60 Hz, ambient -30 sampai +70 °C, relay 240 V AC maks 2.5 A. Ini diatur di housing pompa minyak Dorin dan membuka relay jika tekanan diferensial minyak tetap di bawah cut-out selama seluruh waktu tunda. Default: 0.8 bar cut-out dan 90 s tunda, sesuai tim Anda. Cut-in dianggap cut-out + 0.32 bar. Tunda yang lebih pendek membuat pelatihan lebih cepat.",
    odps_cutout: "Cut-out ΔP",
    odps_delay: "Tunda (s)",
    odps_reset: "Reset ODPS",

    // trend card
    trend_title: "Tren tekanan suction",
    trend_start: "Mulai peristiwa di atas untuk melihat penurunan tekanan rendah tiba-tiba dan pemulihan.",

    // ph card
    ph_title: "Diagram P-h",
    ph_note: "Solid: siklus saat ini. Dashed abu-abu: siklus sehat. Titik 1 suction, 2 discharge, 3 keluar cairan, 4 setelah TXV.",
    ph_axis_h: "h (kJ/kg)",
    ph_axis_p: "P bar abs",

    // diagnosis card
    dg_title: "Kemungkinan penyebab dan checklist",

    // report card
    rep_title: "Laporan servis",
    rep_tag: "Tag unit atau lokasi",
    rep_tech: "Teknisi",
    rep_notes: "Catatan",
    rep_print: "Cetak atau simpan PDF",
    rep_copy: "Salin teks",
    rep_copied: "Tersalin",
    rep_copy_blocked: "Salin diblokir: pilih teks laporan",

    // readings labels
    lbl_amb: "Udara sekitar",
    lbl_ret: "Udara kembali",
    lbl_sup: "Udara keluar",
    lbl_Ps: "1 Suction P",
    lbl_Ts: "1 Suction line",
    lbl_Pd: "2 Discharge P",
    lbl_Td: "2 Discharge line",
    lbl_Tl1: "3 Cairan sebelum filter drier",
    lbl_Tl2: "4 Cairan setelah filter drier",
    lbl_Toil: "5 Sump minyak",
    lbl_dp: "5 Tekanan diferensial minyak (ODPS)",
    lbl_oil: "5 Level minyak",
    chk_nm: "Tidak diukur",

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
    calc_dA: "Air ΔT di seluruh coil K",
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
    sl_charge: "Isian refrigernan",
    sl_drier: "Pembatasan filter drier",
    sl_txv: "Pembukaan TXV",
    sl_foul: "Kotoran kondensor",
    sl_fan: "Kecepatan kipas kondensor",
    sl_air: "Aliran udara evaporator",
    sl_wear: "Kesorapan katup kompresor",
    sl_oil: "Level minyak",

    // preset buttons
    preset_healthy: "Sehat",
    preset_leak: "Longsor (70% charge)",
    preset_drier: "Filter dier tersumbat",
    preset_txvc: "TXV macet tertutup",
    preset_txvo: "TXV macet terbuka",
    preset_cond: "Kondensor kotor",
    preset_fan: "Gagal kipas",
    preset_comp: "Kompresor lemah",
    preset_oil: "Minyak rendah",
    preset_over: "Overcharge",
    preset_airfilter: "Filter udara kotor",
    preset_evapfan: "Kipas evaporator gagal",
    preset_nc: "Non-kondensabel (udara/N2)",

    // events
    ev_ice: "Sudden drop: ice plug at TXV",
    ev_fan: "Sudden drop: evap fan stops",
    ev_sol: "Sudden drop: solenoid sticks",
    ev_running: "Event running: {name}…",
    ev_back: "Back to normal. Pattern: {hint}",

    // challenge mode
    ch_title: "Mode Tantangan / Ujian",
    ch_intro: "Satu kerusakan acak telah dibuat. Slider disembunyikan. Diagnosis kerusakan dan pilih 3 langkah perbaikan prioritas, lalu kirim.",
    ch_fault_hidden: "Kerusakan tersembunyi — diagnosis dari bacaan di atas.",
    ch_your_diagnosis: "Diagnosis Anda",
    ch_priority_steps: "Langkah perbaikan prioritas (pilih 3)",
    ch_submit: "Kirim Diagnosis",
    ch_score: "Skor",
    ch_correct: "Diagnosis benar!",
    ch_wrong: "Salah. Kerusakannya adalah: {fault}",
    ch_technical: "Pembicaraan teknis",
    ch_optional_sensor: "Opsional / tidak diukur",
    ch_diag_healthy: "Sehat",
    ch_step_0: "Periksa kebocoran, perbaiki, evakuasi dan isi ulang",
    ch_step_1: "Ambil refrigeran berlebih, target SC 4–8 K",
    ch_step_2: "Ganti filter drier yang tersumbat",
    ch_step_3: "Atur atau ganti TXV (setel SH 5–8 K)",
    ch_step_4: "Bersihkan kondensor / pulihkan aliran kipas",
    ch_step_5: "Perbaiki atau ganti kompresor",
    ch_step_6: "Tambah minyak / perbaiki return minyak, reset ODPS",
    ch_step_7: "Perbaiki aliran udara evaporator / ganti filter",
    ch_step_8: "Ganti solenoid yang macet",

    // diagnosis causes
    fx_leak_title: "Isian rendah atau bocor refrigernan",
    fx_leak_desc: "Evaporator kekurangan (superheat tinggi, tekanan suction rendah) dan keluar kondensor habis cairan (subcooling mendekati 0, flash gas). Kompresor berjalan panas; dugu LP trip atau coil beku.",
    fx_over_title: "Overcharge",
    fx_over_desc: "Cairan berlebih tumpah di kondensor: subcooling dan head pressure naik, kompresor bekerja lebih keras, flood-back mungkin.",
    fx_drier_title: "Filter dier tersumbat",
    fx_drier_desc: "Pembatasan membuat cairan flash, jadi outlet lebih dingin dari inlet. Semua yang seterusnya kekurangan: superheat naik, tekanan suction rendah, coil mungkin beku.",
    fx_txvc_title: "TXV macet tertutup atau underfeeding",
    fx_txvc_desc: "Klep melewatkan terlalu sedikit refrigernan: superheat tinggi dan tekanan suction rendah, tapi subcooling normal atau tinggi dan tidak ada penurunan suhu di filter drier.",
    fx_txvo_title: "TXV macet terbuka atau overfeeding",
    fx_txvo_desc: "Terlalu banyak cairan masuk ke evaporator: superheat mendekati 0, tekanan suction tinggi, suction line dingin. Liquid slugging dapat merusak kompresor.",
    fx_cond_title: "Kondensor kotor atau gagal kipas",
    fx_cond_desc: "Pemanasan buruk: suhu kondensasi naik jauh di atas suhu sekitar (approach di atas 20 K), head pressure dan suhu discharge naik, HP trip mungkin.",
    fx_comp_title: "Katup kompresor aus",
    fx_comp_desc: "Gas bocor secara internal: tekanan suction naik, tekanan discharge turun, suhu discharge tinggi untuk rasio tekanan, kapasitas hilang.",
    fx_air_title: "Aliran udara evaporator rendah",
    fx_air_desc: "Udara lebih sedikit melintasi coil, jadi coil terlalu dingin: tekanan suction turun, superheat turun ke 0, penurunan suhu udara terlalu besar dan coil mungkin beku. Cairan dapat flood back ke kompresor.",
    fx_oil_title: "Minyak rendah atau masalah return minyak",
    fx_oil_desc: "Pelumasan buruk: level minyak rendah dan sump panas berisiko aus bearing dan oil-pressure trip.",
    fx_sol_title: "Solenoid (S.Valve) macet",
    fx_sol_desc: "Solenoid cairan tertutup singkat dan membuat TXV kekurangan. Periksa tegangan coil, plunger dan strainer.",
    fx_sol_check1: "Periksa tegangan coil, plunger dan strainer.",
    fx_sol_check2: "Perhatikan frost-back pada suction line dan accumulator.",
    fx_sol_check3: "Reset SH ke 5–8 K atau ganti solenoid valve.",
    fx_nc_title: "Non-kondensabel (udara / nitrogen)",
    fx_nc_desc: "Inersia menumpuk di kondensor: head pressure dan suhu discharge naik, kondensor approach memburuk, subcooling bacaan palsu normal/tinggi, dan tekanan discharge fluktuasi.",
    fx_nc_check1: "Periksa non-kondensabel dengan bandingkan gauge dan suhu atas.",
    fx_nc_check2: "Ambil refrigeran, evakuasi dan isi ulang.",
    fx_nc_check3: "Sisakan udara yang masuk saat servis kurang baik.",

    fx_leak_check1: "Periksa kebocoran flare, sambungan, inti Schrader, drier dan fitting bulb TXV.",
    fx_leak_check2: "Cari noda minyak dan gelembung di sight glass.",
    fx_leak_check3: "Perbaiki, evakuasi di bawah 500 microns dan tahan vakum.",
    fx_leak_check4: "Isi R407C sebagai cairan saja (campuran zeotrop, jangan dari uap).",
    fx_leak_check5: "Verifikasi SH 5–8 K dan SC 4–8 K pada bekan penuh.",
    fx_leak_check6: "Sisakan non-condensables.",
    fx_over_check1: "Konfirmasi kondensor bersih dan kipas berjalan terlebih dahulu.",
    fx_over_check2: "Ambil sedikit R407C dan amati SC.",
    fx_over_check3: "Target SC 4–8 K dan head pressure normal.",
    fx_over_check4: "Sisakan non-condensables.",
    fx_drier_check1: "Ukur ΔT di seluruh filter drier (di atas 2 K mencurigakan).",
    fx_drier_check2: "Cari eskrim atau titik dingin pada outlet filter drier.",
    fx_drier_check3: "Isolasi, ambil refrigeran dan ganti filter drier.",
    fx_drier_check4: "Evakuasi, isi ulang dan periksa minyak untuk kelembaban atau asam.",
    fx_drier_check5: "Temukan sumber: kotoran, kelembaban atau kompresor terbakar.",
    fx_txvc_check1: "Periksa bulb: klip, isolasi dan posisi di suction line.",
    fx_txvc_check2: "Bulb dingin tanpa tekanan berarti kehilangan isian bulb.",
    fx_txvc_check3: "Periksa S.Valve buka dan strainer bersih.",
    fx_txvc_check4: "Atur SH ke 5–8 K atau ganti TXV.",
    fx_txvo_check1: "Periksa kontak dan isolasi bulb; bulb longgar atau basah menyebabkan overfeeding.",
    fx_txvo_check2: "Periksa kotoran yang memegang klep terbuka.",
    fx_txvo_check3: "Cari frost-back pada suction line dan accumulator.",
    fx_txvo_check4: "Setel SH ke 5–8 K atau ganti TXV.",
    fx_cond_check1: "Periksa rotasi, kecepatan, kapasitor, kontaktor dan overload kipas.",
    fx_cond_check2: "Periksa dan cuci coil; bersihkan aliran udara dan buang daur ulang udara panas.",
    fx_cond_check3: "Bandingkan suhu sekitar dengan kondisi desain 40 °C.",
    fx_cond_check4: "Jika coil bersih, periksa non-condensables.",
    fx_comp_check1: "Lakukan pump-down test: suction harus jatuh dan tahan.",
    fx_comp_check2: "Bandingkan arus beban dengan nameplate.",
    fx_comp_check3: "Periksa warna minyak untuk logam aus.",
    fx_comp_check4: "Perbaiki atau ganti kompresor.",
    fx_air_check1: "Periksa filter udara dan ganti pada diferensi tekanan standar (pre-filter 100 Pa, final filter 300 Pa).",
    fx_air_check2: "Periksa rotasi kipas suplai, tegangan rantai dan kecepatan VSD.",
    fx_air_check3: "Cari coil beku, damper tertutup atau aliran masuk/keluar yang tersumbat.",
    fx_air_check4: "Bersihkan coil, leburkan jika beku, lalu periksa SH 5–8 K dan air ΔT 10–14 K.",
    fx_oil_check1: "Periksa sight glass dan garis return pemisah minyak.",
    fx_oil_check2: "Periksa ODPS (Kriwan DELTA-P II 22 S 635): supply 115/230 V ada, relay tertutup saat berjalan, hanya buka setelah tunda di bawah cut-out. Tombol Reset menghapus lockout.",
    fx_oil_check3: "Periksa crankcase heater dan suhu sump.",
    fx_oil_check4: "Periksa pengenceran refrigeran atau slugging.",
    fx_oil_check5: "Konfirmasi SH dan kecepatan suction, lalu tambah minyak POE yang disetujui.",

    // report
    rep_h2: "Laporan Servis R407C DX",
    rep_meta: "Sumber: {source} (tekanan gauge)",
    rep_readings: "Bacaan",
    rep_calculated: "Nilai yang dihitung",
    rep_alarms: "Alarm",
    rep_likely: "Kemungkinan penyebab",
    rep_checks: "Pemeriksaan untuk penyebab utama",
    rep_events: "Peristiwa",
    rep_notes_label: "Catatan",
    rep_none: "Tidak ada",
    rep_none_recorded: "Tidak tercatat",
    rep_disclaimer: "Model tekanan adalah perkiraan; konfirmasikan dengan data pabrik.",
    rep_healthy: "Siklus tampak sehat. Superheat dan subcooling dalam rentang. Buat kerusakan atau ketik bacaan berbeda untuk berlatih.",
    rep_date_label: "Unit tidak diberi nama",
    rep_tech_label: "Teknisi tidak diberi nama",

    // controls
    btn_print: "Cetak atau simpan PDF",
    btn_copy: "Salin teks",
    btn_theme: "Tema Gelap / Terang",
    btn_reset_healthy: "Reset Sehat",
    btn_test_odps: "Uji Tunda ODPS",
    lang_en: "EN",
    lang_id: "ID"
  }
};

let currentLang = (localStorage.getItem("r407c-lang") || navigator.language || "en").startsWith("id") ? "id" : "en";

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
  if (btn) btn.textContent = currentLang === "id" ? t("lang_en") : t("lang_id");
}
