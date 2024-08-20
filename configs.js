var variables_1 = {
  //Input
  IB0: "DB14,B8",
  IB1: "DB14,B9",
  IB2: "DB14,B10",
  IB3: "DB14,B11",
  IB4: "DB14,B12",
  IB5: "DB14,B13",
  IB6: "DB14,B14",
  IB7: "DB14,B15",
  IB8: "DB14,B16",
  IB9: "DB14,B17",
  //Out
  QB0: "DB14,B18",
  QB1: "DB14,B19",
  QB2: "DB14,B20",
  QB3: "DB14,B21",
  QB4: "DB14,B22",
  QB5: "DB14,B23",
  QB6: "DB14,B24",
  QB7: "DB14,B25",
  QB8: "DB14,B26",
  QB9: "DB14,B27",
  AM: "DB14,X28.0",
  // Output
  Led_Status: 'DB18,INT0',
  BT1_Ready: 'DB18,X2.0',
  BT2_Ready: 'DB18,X2.1',
  BT_Return_Ready: 'DB18,X2.2',
  Cum_Lap_Ready: 'DB18,X2.3',
  Cum_Check_Ready: 'DB18,X2.4',
  Ban_Nung_Xoay_Ready: 'DB18,X2.5',
  Robot_3_Truc_Ready: 'DB18,X2.6',
  BX_Ready_Origin: 'DB18,X2.7',
  Cum_Check_Ready_Origin: 'DB18,X3.0',
  Lost_Roto: 'DB18,X3.1',
  // Roto Status
  Roto_0_Status: 'DB17,INT0',
  Roto_0_Height_Truc: 'DB17,REAL2',
  Roto_0_Result: 'DB17,INT6',
  Roto_1_Status: 'DB17,INT8',
  Roto_1_Height_Truc: 'DB17,REAL10',
  Roto_1_Result: 'DB17,INT14',
  Roto_2_Status: 'DB17,INT16',
  Roto_2_Height_Truc: 'DB17,REAL18',
  Roto_2_Result: 'DB17,INT22',
  Roto_3_Status: 'DB17,INT24',
  Roto_3_Height_Truc: 'DB17,REAL26',
  Roto_3_Result: 'DB17,INT30',
  Roto_4_Status: 'DB17,INT32',
  Roto_4_Height_Truc: 'DB17,REAL34',
  Roto_4_Result: 'DB17,INT38',
  ConfirmNG_OK: 'DB17,X48.0',
  bt_OK_NG: 'DB17,X48.1',
  Step_Status: 'DB17,INT50',
  // Control --> PLC
  Machine_Reset_All: 'DB8,X54.0',
  Machine_Reset_X: 'DB8,X54.1',
  Machine_Reset_Y: 'DB8,X54.2',
  Machine_Reset_Z: 'DB8,X54.3',
  Machine_Run_Home_All: 'DB8,X54.4',
  Machine_Run_Home_X: 'DB8,X54.5',
  Machine_Run_Home_Y: 'DB8,X54.6',
  Machine_Run_Home_Z: 'DB8,X54.7',
  Machine_Run_Home_BT_1: 'DB8,X55.0',
  Machine_Run_Home_BT_2: 'DB8,X55.1',
  Machine_Run_Home_BT_Return: 'DB8,X55.2',
  Machine_Run_Home_CumBanxoay: 'DB8,X55.3',
  Machine_Step_Index: 'DB8,INT56',
  Machine_Off_Buzzer: 'DB8,X58.0',
  Machine_Home_Status: 'DB8,X58.1',
  Machine_Alarm_Error: 'DB8,INT60',
  Machine_Temperate_Heater: 'DB8,REAL62',
  Machine_Blow_Air_Manual: 'DB8,X66.0',
  Machine_Confirm_Lap_Truc_NG: 'DB8,X66.1',
  Machine_Confirm_Lap_Truc_OK: 'DB8,X66.2',
  Machine_Error_Detect_Tray: 'DB8,X66.3',
  Machine_Save_Result_Done: 'DB8,X66.4',
  Machine_Done_Tray: 'DB8,X66.5',
  Machine_Noti_NG: 'DB8,X66.6',
  Machine_Confirm_NG: 'DB8,X66.7',
  Machine_Request_Tray_In: 'DB8,X67.0',
  Machine_Request_Tray_Out: 'DB8,X67.1',
  Machine_Persent_heater_manual: 'DB8,REAL68',
  Machine_T_LamMat: 'DB8,REAL72',
  Jog_X_P: 'DB8,X76.0',
  Jog_X_N: 'DB8,X76.1',
  Jog_Y_P: 'DB8,X76.2',
  Jog_Y_N: 'DB8,X76.3',
  Jog_Z_P: 'DB8,X76.4',
  Jog_Z_N: 'DB8,X76.5',

  //BT1
  BT1_Man_FWD: 'DB8,X0.0',
  BT1_Freq: 'DB8,INT2',
  BT1_Man_Ha: 'DB8,X4.0',
  BT1_Man_Kep: 'DB8,X4.1',
  //BT2
  BT2_Man_FWD: 'DB8,X6.0',
  BT2_Freq: 'DB8,INT8',
  BT2_Man_Ha: 'DB8,X10.0',
  BT2_Man_Kep: 'DB8,X10.1',
  //BTReturn
  BT_Return_Man_FWD: 'DB8,X12.0',
  BT_Return_Freq: 'DB8,INT14',
  BT_Return_Man_Bot_Ha: 'DB8,X16.0',
  BT_Return_Man_Mid_Ha: 'DB8,X16.1',
  BT_Return_Man_Kep: 'DB8,X16.2',
  // Truc X
  Truc_X_Real_Pos: 'DB8,REAL18',
  Truc_X_Jog_Add: 'DB8,X22.0',
  Truc_X_Jog_Sub: 'DB8,X22.1',
  Truc_X_Pos_Jog: 'DB8,REAL24',
  //Truc Y
  Truc_Y_Real_Pos: 'DB8,REAL28',
  Truc_Y_Jog_Add: 'DB8,X32.0',
  Truc_Y_Jog_Sub: 'DB8,X32.1',
  Truc_Y_Pos_Jog: 'DB8,REAL34',
  //Truc Z
  Truc_Z_Real_Pos: 'DB8,REAL38',
  Truc_Z_Jog_Add: 'DB8,X42.0',
  Truc_Z_Jog_Sub: 'DB8,X42.1',
  Truc_Z_Pos_Jog: 'DB8,REAL44',
  Truc_Z_Positon_Safety: 'DB8,REAL48',
  //Tay Kep
  Tay_Kep_Kep: 'DB8,X52.0',
  Tay_Kep_Nha: 'DB8,X52.1',
  // Setting
  Setting_Limit_X_Pos: 'DB21,REAL0',
  Setting_Limit_X_Neg: 'DB21,REAL4',
  Setting_Limit_Y_Pos: 'DB21,REAL8',
  Setting_Limit_Y_Neg: 'DB21,REAL12',
  Setting_Limit_Z_Pos: 'DB21,REAL16',
  Setting_Limit_Z_Neg: 'DB21,REAL20',
  Setting_Limit_Pos_NangCheck: 'DB21,REAL24',
  Setting_Limit_Neg_NangCheck: 'DB21,REAL28',
  Setting_Limit_Pos_KepCheck: 'DB21,REAL32',
  Setting_Limit_Neg_KepCheck: 'DB21,REAL36',
  Setting_Limit_Pos_NangLap: 'DB21,REAL40',
  Setting_Limit_Neg_NangLap: 'DB21,REAL44',
  Setting_Limit_Pos_KepLap: 'DB21,REAL48',
  Setting_Limit_Neg_KepLap: 'DB21,REAL52',
  Setting_Velocity_X_Man: 'DB21,INT56',
  Setting_Velocity_Y_Man: 'DB21,INT58',
  Setting_Velocity_Z_Man: 'DB21,INT60',
  Setting_Velocity_X_Auto: 'DB21,INT62',
  Setting_Velocity_Y_Auto: 'DB21,INT64',
  Setting_Velocity_Z_Auto: 'DB21,INT66',
  Setting_Velocity_Cum_Check_Nang: 'DB21,INT68',
  Setting_Velocity_Cum_Check_Kep: 'DB21,INT70',
  Setting_Velocity_Cum_Lap_Nang: 'DB21,INT72',
  Setting_Velocity_Cum_Lap_Kep: 'DB21,INT74',
  Setting_Offset_CumCheck: 'DB21,REAL76',
  Setting_Off_Buzzer: 'DB21,X80.0',
  Setting_Flag_Maintance: 'DB21,X80.1',
  Setting_Warring_Check: 'DB21,X80.2',
  //Data_Step
  Pos_Roto_0_X: 'DB15,REAL8',
  Pos_Roto_0_Y: 'DB15,REAL12',
  Pos_Roto_0_Z: 'DB15,REAL16',
  Pos_Roto_1_X: 'DB15,REAL20',
  Pos_Roto_1_Y: 'DB15,REAL24',
  Pos_Roto_1_Z: 'DB15,REAL28',
  Pos_Roto_2_X: 'DB15,REAL32',
  Pos_Roto_2_Y: 'DB15,REAL36',
  Pos_Roto_2_Z: 'DB15,REAL40',
  Pos_Roto_3_X: 'DB15,REAL44',
  Pos_Roto_3_Y: 'DB15,REAL48',
  Pos_Roto_3_Z: 'DB15,REAL52',
  Pos_Roto_4_X: 'DB15,REAL56',
  Pos_Roto_4_Y: 'DB15,REAL60',
  Pos_Roto_4_Z: 'DB15,REAL64',
  Pos_Roto_5_X: 'DB15,REAL68',
  Pos_Roto_5_Y: 'DB15,REAL72',
  Pos_Roto_5_Z: 'DB15,REAL76',
  Pos_Roto_6_X: 'DB15,REAL80',
  Pos_Roto_6_Y: 'DB15,REAL84',
  Pos_Roto_6_Z: 'DB15,REAL88',
  Pos_Truc_0_X: 'DB15,REAL92',
  Pos_Truc_0_Y: 'DB15,REAL96',
  Pos_Truc_0_Z: 'DB15,REAL100',
  Pos_Truc_1_X: 'DB15,REAL104',
  Pos_Truc_1_Y: 'DB15,REAL108',
  Pos_Truc_1_Z: 'DB15,REAL112',
  Pos_Truc_2_X: 'DB15,REAL116',
  Pos_Truc_2_Y: 'DB15,REAL120',
  Pos_Truc_2_Z: 'DB15,REAL124',
  Pos_Truc_3_X: 'DB15,REAL128',
  Pos_Truc_3_Y: 'DB15,REAL132',
  Pos_Truc_3_Z: 'DB15,REAL136',
  Pos_Truc_4_X: 'DB15,REAL140',
  Pos_Truc_4_Y: 'DB15,REAL144',
  Pos_Truc_4_Z: 'DB15,REAL148',
  Pos_Truc_5_X: 'DB15,REAL152',
  Pos_Truc_5_Y: 'DB15,REAL156',
  Pos_Truc_5_Z: 'DB15,REAL160',
  Pos_Z_Offset_Tha_Roto: 'DB15,REAL164',
  Pos_Cum_Kiem_Tra_Tha_X: 'DB15,REAL168',
  Pos_Cum_Kiem_Tra_Tha_Y: 'DB15,REAL172',
  Pos_Cum_Kiem_Tra_Tha_Z: 'DB15,REAL176',
  Pos_Cum_Kiem_Tra_Gap_X: 'DB15,REAL180',
  Pos_Cum_Kiem_Tra_Gap_Y: 'DB15,REAL184',
  Pos_Cum_Kiem_Tra_Gap_Z: 'DB15,REAL188',
  Pos_Ktr_Up: 'DB15,REAL192',
  Pos_Ktr_Kep: 'DB15,REAL196',

  //
  Temperature_TrayID1: 'DB15,INT256',
  Persent_Power_Heater_TrayID1: 'DB15,REAL258',
  Time_Blow_TrayID1: 'DB15,INT262',
  Pos_Cum_Lap_Gap_X_TrayID1: 'DB15,REAL264',
  Pos_Cum_Lap_Gap_Y_TrayID1: 'DB15,REAL268',
  Pos_Cum_Lap_Gap_Z_TrayID1: 'DB15,REAL272',
  Pos_Cum_Lap_Nhan_X_TrayID1: 'DB15,REAL276',
  Pos_Cum_Lap_Nhan_Y_TrayID1: 'DB15,REAL280',
  Pos_Cum_Lap_Nhan_Z_TrayID1: 'DB15,REAL284',
  Pos_Cum_Lap_Lap_X_TrayID1: 'DB15,REAL288',
  Pos_Cum_Lap_Lap_Y_TrayID1: 'DB15,REAL292',
  Pos_Cum_Lap_Lap_Z_TrayID1: 'DB15,REAL296',
  Pos_Nang_Kep_Up_TrayID1: 'DB15,REAL300',
  Pos_Nang_Kep_Kep_TrayID1: 'DB15,REAL304',
  Pos_Ban_XoayX_TrayID1: 'DB15,REAL308',
  Pos_Ban_XoayY_TrayID1: 'DB15,REAL312',
  Pos_Ban_XoayZ_TrayID1: 'DB15,REAL316',
  //
  Temperature_TrayID2: 'DB15,INT320',
  Persent_Power_Heater_TrayID2: 'DB15,REAL322',
  Time_Blow_TrayID2: 'DB15,INT326',
  Pos_Cum_Lap_Gap_X_TrayID2: 'DB15,REAL328',
  Pos_Cum_Lap_Gap_Y_TrayID2: 'DB15,REAL332',
  Pos_Cum_Lap_Gap_Z_TrayID2: 'DB15,REAL336',
  Pos_Cum_Lap_Nhan_X_TrayID2: 'DB15,REAL340',
  Pos_Cum_Lap_Nhan_Y_TrayID2: 'DB15,REAL344',
  Pos_Cum_Lap_Nhan_Z_TrayID2: 'DB15,REAL348',
  Pos_Cum_Lap_Lap_X_TrayID2: 'DB15,REAL352',
  Pos_Cum_Lap_Lap_Y_TrayID2: 'DB15,REAL356',
  Pos_Cum_Lap_Lap_Z_TrayID2: 'DB15,REAL360',
  Pos_Nang_Kep_Up_TrayID2: 'DB15,REAL364',
  Pos_Nang_Kep_Kep_TrayID2: 'DB15,REAL368',
  Pos_Ban_XoayX_TrayID2: 'DB15,REAL372',
  Pos_Ban_XoayY_TrayID2: 'DB15,REAL376',
  Pos_Ban_XoayZ_TrayID2: 'DB15,REAL380',
  //
  Check_QR1_Done: 'DB15,X384.0',
  Check_QR2_Done: 'DB15,X384.1',
  SL_In_Tray_1: 'DB15,INT386',
  SL_In_Tray_2: 'DB15,INT388',
  Type_Roto: 'DB15,INT392',
  Z_Safety_ID1: 'DB15,REAL394',
  Z_Safety_ID2: 'DB15,REAL398',
  T_LamMat_ID1: 'DB15,REAL402',
  T_LamMat_ID2: 'DB15,REAL406',
  Offset_Standar_ID1: 'DB15,REAL410',
  Offset_Standar_ID2:'DB15,REAL414',

  // Test
  Pos_X: 'DB8,REAL78',
  Pos_Y: 'DB8,REAL82',
  Pos_Z: 'DB8,REAL86',
  Run_Test: 'DB8,X90.0',
};
var variables_2 = {
  Jog_BX: 'DB8,X2.0',
  XL_Nang: 'DB8,X2.1',
  ON_Nung: 'DB8,X2.2',
  //Cum Lap
  Cum_Lap_Real_Pos_UpDown: 'DB8,REAL4',
  Cum_Lap_Real_Pos_KepMo: 'DB8,REAL8',
  Cum_Lap_Pos_Jog_Up: 'DB8,REAL12',
  Cum_Lap_Pos_Jog_Kep: 'DB8,REAL16',
  Cum_Lap_Excute_Pos_Up: 'DB8,X20.0',
  Cum_Lap_M_Inout_CylEp: 'DB8,X20.1',
  Cum_Lap_M_Cyl_Ep: 'DB8,X20.2',
  Cum_Lap_Excute_Pos_Kep: 'DB8,X20.3',
  Cum_Lap_XL_Kep: 'DB8,X20.4',
  Cum_Lap_XL_Nang: 'DB8,X20.5',
  Cum_Lap_Blow_Air: 'DB8,X20.6',
  //Cum Check
  Cum_Check_Real_Pos_UpDown: 'DB8,REAL22',
  Cum_Check_Real_Pos_KepMo: 'DB8,REAL26',
  Cum_Check_Pos_Jog_Up: 'DB8,REAL30',
  Cum_Check_Pos_Jog_Kep: 'DB8,REAL34',
  Cum_Check_Excute_Pos_Up: 'DB8,X38.0',
  Cum_Check_Spare_1: 'DB8,X38.1',
  Cum_Check_M_Cyl_U: 'DB8,X38.2',
  Cum_Check_Excute_Pos_Kep: 'DB8,X38.3',
  Cum_Check_XL_Kep: 'DB8,X38.4',
  Cum_Check_Check_Man: 'DB8,X38.5',
  Cum_Check_Check_Man_Done: 'DB8,X38.6',
  Cum_Check_Pos_Check_Daily: 'DB8,REAL40',
  //
  Machine_Error_Check: 'DB8,X44.0',
  //
  Jog_Up_Cum_Lap: 'DB8,X44.1',
  Jog_Down_Cum_Lap: 'DB8,X44.2',
  Jog_Mo_Cum_Lap: 'DB8,X44.3',
  Jog_Kep_Cum_Lap: 'DB8,X44.4',
  Jog_Up_Cum_Do: 'DB8,X44.5',
  Jog_Down_Cum_Do: 'DB8,X44.6',
  Jog_Mo_Cum_Do: 'DB8,X44.7',
  Jog_Kep_Cum_Do: 'DB8,X45.0',
  //
  //Para
  Jig_Height: 'DB1,REAL0',
  Jig_Dim: 'DB1,REAL4',
  Lap_Height: 'DB1,REAL8',
  Lap_Dim: 'DB1,REAL12',
  Check_Dim: 'DB1,REAL16',
  Check_Height: 'DB1,REAL20',
};
module.exports = { variables_1, variables_2 };