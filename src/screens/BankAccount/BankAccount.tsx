import { StyleSheet, Text, View, FlatList,Animated,PanResponder,TouchableOpacity, Dimensions,Button } from 'react-native';
import React, { useEffect, useMemo, useRef,useState } from 'react';
import { Black, White } from '../../utils/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import RBSheet from 'react-native-raw-bottom-sheet';
import { SafeAreaView } from 'react-native-safe-area-context';
const transactions = [
  // {
  //   title: 'Mar 06, 2025',
  //   price: '£5,763.00',
  //   items: [
  //     {
  //       id: '1',
  //       description: '202503060061476',
  //       amount: '-£5.',
  //       neachy: '00',
  //       card: 'RBS06035H95YJY02',
  //     },
  //     {
  //       id: '1',
  //       description: 'ADVICE CONFIRMS',
  //       amount: '£5,766.07',
  //       neachy: '00',
  //       card: 'RBS06035H95YJY02',
  //       GREEN:true
  //     },
     
  //   ],
  // },
  // {
  //   title: 'Mar 3, 2025',
  //   price: '£1.31',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'Sahil  arora',
  //       amount: '-£2.',
  //       neachy: '00',
  //       card: 'LONDON',
  //     },
   
     
  //   ],
  // },
  {
    title: 'Feb 22, 2025',
    price: '£1.93',
    items: [
      {
        id: '1',
        description: 'TOMA BIMBAI',
        amount: '-£22.',
        neachy: '00',
        card: 'Friend',
      },
   
     
    ],
  },
  {
    title: 'Feb 14, 2025',
    price: '£23.93',
    items: [
      {
        id: '2',
        description: 'LONDON BOROUGH OF',
        amount: '-£1,320.',
        neachy: '00',
        card: 'WWW.NEWHAM.GO',
      },
   
     
    ],
  },
  {
    title: 'Feb 13, 2025',
    price: '£1,343.93',
    items: [
      {
        id: '3',
        description: 'CASH BARCLAY FEB13',
        amount: '£300.',
        neachy: '00',
        card: 'STRATFORD 1 @20.03',
      },
        // {
        //   id: '4',
        //   description: 'SONIA COBZARIU',
        //   amount: '-£390.',
        //   neachy: '00',
        //   card: 'FRIEND',
        // },
     
    ],
  },
 
  // {
  //   title: 'Feb 17, 2025',
  //   price: '£1,569.56',
  //   items: [
  //     {
  //       id: '10',
  //       description: 'SHLR LTD',
  //       amount: '£2,800..',
  //       neachy: '00',
  //       card: 'Bill',
  //     },
  //     {
  //       id: '11',
  //       description: 'Maninder Singh',
  //       amount: '-£5,00.',
  //       neachy: '00',
  //       card: 'Friend',
  //     },
  //     {
  //       id: '12',
  //       description: 'LIPSA PIPALIYA',
  //       amount: '-£500.',
  //       neachy: '00',
  //       card: 'Friend',
  //     },
  //     {
  //       id: '13',
  //       description: '401672 15040477',
  //       amount: '-£5,800.',
  //       neachy: '00',
  //       card: 'INTERNET TRANSFEER',
  //     },
  //     {
  //       id: '14',
  //       description: '401672 15040477',
  //       amount: '-£5,800.',
  //       neachy: '00',
  //       card: 'INTERNET TRANSFEER',
  //     },
  //     {
  //       id: '15',
  //       description: 'Non-Sterling',
  //       amount: '-£0.',
  //       neachy: '03',
  //       card: 'Transction fee',
  //     },
  //     {
  //       id: '16',
  //       description: 'INT`L 0005147545',
  //       amount: '-£10.',
  //       neachy: '57',
  //       card: 'UBER CANADA/UBEREA',
  //     },
  //     {
  //       id: '17',
  //       description: 'Robinjit Singh',
  //       amount: '-£500.',
  //       neachy: '00',
  //       card: 'Family',
  //     },
  //     {
  //       id: '18',
  //       description: 'lulian florinel St',
  //       amount: '-£3,500.',
  //       neachy: '00',
  //       card: 'Sent from Revolut',
  //     },
  //     {
  //       id: '19',
  //       description: 'NC CONS LTD',
  //       amount: '-£2,800.',
  //       neachy: '00',
  //       card: 'NC CONS LTD',
  //     },
  //     {
  //       id: '20',
  //       description: 'Sandeep Singh',
  //       amount: '-£4,200.',
  //       neachy: '00',
  //       card: 'Family',
  //     },
  //     {
  //       id: '21',
  //       description: '401672 15040477',
  //       amount: '-£7,500.',
  //       neachy: '00',
  //       card: 'INTERNET TRANSFEER',
  //     },
  //     {
  //       id: '22',
  //       description: 'lulian Florinel St',
  //       amount: '-£1,650.',
  //       neachy: '00',
  //       card: 'Sent from Revolut',
  //     },
  //     {
  //       id: '23',
  //       description: 'lulian Florinel St',
  //       amount: '-£2,950.',
  //       neachy: '00',
  //       card: 'Sent from Revolut',
  //     },
  //     {
  //       id: '24',
  //       description: 'lulian Florinel St',
  //       amount: '-£1,990.',
  //       neachy: '00',
  //       card: 'Sent from Revolut',
  //     },
  //     {
  //       id: '25',
  //       description: 'Mehakdeep Singh',
  //       amount: '-£3,000.',
  //       neachy: '00',
  //       card: 'Family',
  //     },
  //     {
  //       id: '26',
  //       description: 'NC CONS LTD',
  //       amount: '-£2,300.',
  //       neachy: '00',
  //       card: 'NC CONS LTD',
  //     },
  //     {
  //       id: '27',
  //       description: 'NC CONS LTD',
  //       amount: '-£2,000.',
  //       neachy: '00',
  //       card: 'NC CONS LTD',
  //     },
  //     {
  //       id: '28',
  //       description: 'lulian Florinel St',
  //       amount: '-£1,850.',
  //       neachy: '00',
  //       card: 'Sent from Revolut',
  //     },
  //     {
  //       id: '29',
  //       description: 'lulian Florinel St',
  //       amount: '-£1,990.',
  //       neachy: '00',
  //       card: 'Sent from Revolut',
  //     },
  //   ],
  // },
  // {
  //   title: 'Feb 15, 2025',
  //   price: '£51.87',
  //   items: [
  //     {
  //       id: '30',
  //       description: 'CASH RB SCOT FEB15',
  //       amount: '-£100.',
  //       neachy: '00',
  //       card: 'TESCO HA ST @19:13',
  //     },
  //     {
  //       id: '31',
  //       description: 'CASH RB SCOT FEB15',
  //       amount: '-£200.',
  //       neachy: '00',
  //       card: 'TESCO HA ST @19:12',
  //     },
  //     {
  //       id: '32',
  //       description: 'S',
  //       amount: '-£400.',
  //       neachy: '00',
  //       card: 'Friend',
  //     },
  //     {
  //       id: '33',
  //       description: 'SINGH J',
  //       amount: '£750.',
  //       neachy: '00',
  //       card: 'FAMILY',
  //     },
     
  //   ],
  // },
  // {
  //   title: 'Feb 11, 2025',
  //   price: '£1.87',
  //   items: [
  //     {
  //       id: '34',
  //       description: 'CASH RB SCOT FEB11',
  //       amount: '-£100.',
  //       neachy: '00',
  //       card: 'TESCO HA ST @19:18',
  //     },
  //     {
  //       id: '35',
  //       description: 'CASH RB SCOT FEB15',
  //       amount: '-£200.',
  //       neachy: '00',
  //       card: 'TESCO HA ST @19:17',
  //     },
  //     {
  //       id: '36',
  //       description: 'Sahil arora',
  //       amount: '-£270.',
  //       neachy: '00',
  //       card: 'Thank you',
  //     },
  //     {
  //       id: '37',
  //       description: 'Robinjit Singh',
  //       amount: '-£500.',
  //       neachy: '00',
  //       card: 'Family',
  //     },
  //     {
  //       id: '38',
  //       description: '401672 15040477',
  //       amount: '-£400.',
  //       neachy: '00',
  //       card: 'INTERNET TRANSFEER',
  //     },
  //     {
  //       id: '39',
  //       description: 'LPT CONSTRUCTION I',
  //       amount: '-£20.',
  //       neachy: '00',
  //       card: 'Bill',
  //     },
  //   ],
  // },
  // {
  //   title: 'Feb 10, 2025',
  //   price: '£1,491.87',
  //   items: [
  //     {
  //       id: '40',
  //       description: 'Robinjit Singh',
  //       amount: '-£200.',
  //       neachy: '00',
  //       card: 'Family',
  //     },
  //     {
  //       id: '41',
  //       description: 'Sandeep Singh',
  //       amount: '-£210.',
  //       neachy: '00',
  //       card: 'Family',
  //     },
  //     {
  //       id: '42',
  //       description: 'lulian Florinel St',
  //       amount: '-£1,800.',
  //       neachy: '00',
  //       card: 'Sent from Revolut',
  //     },
  //     {
  //       id: '43',
  //       description: 'Arpandeep Singh',
  //       amount: '-£2,300.',
  //       neachy: '00',
  //       card: 'Friend',
  //     },
  //     {
  //       id: '44',
  //       description: 'NC CONS LTD',
  //       amount: '-£2,400.',
  //       neachy: '00',
  //       card: 'BILL',
  //     },
  //     {
  //       id: '45',
  //       description: 'Mehakdeep Singh',
  //       amount: '-£100.',
  //       neachy: '00',
  //       card: 'Family',
  //     },
  //     {
  //       id: '46',
  //       description: 'SHLR LTD',
  //       amount: '-£55.',
  //       neachy: '00',
  //       card: 'Bill',
  //     },
  //   ],
  // },
  // {
  //   title: 'Feb 8, 2025',
  //   price: '£156.87',
  //   items: [
  //     {
  //       id: '47',
  //       description: 'CASH RB SCOT FEB08',
  //       amount: '-£100.',
  //       neachy: '00',
  //       card: 'TESCO HA ST @14:39',
  //     },
  //     {
  //       id: '48',
  //       description: 'CASH RB SCOT FEB08',
  //       amount: '-£100.',
  //       neachy: '00',
  //       card: 'TESCO HA ST @14:36',
  //     },
  //     {
  //       id: '49',
  //       description: '401672 15040477',
  //       amount: '-£400.',
  //       neachy: '00',
  //       card: 'INTERNET TRANSFEER',
  //     },
  //     {
  //       id: '50',
  //       description: 'HR03 BUILDS LIMTE',
  //       amount: '-£852.',
  //       neachy: '35',
  //       card: 'WAGES',
  //     },
      
  //   ],
  // },
  // {
  //   title: 'Feb 7, 2025',
  //   price: '£4.52',
  //   items: [
  //     {
  //       id: '51',
  //       description: 'Non-Sterling',
  //       amount: '-£0.',
  //       neachy: '12',
  //       card: 'Transactions Fee',
  //     },
  //     {
  //       id: '52',
  //       description: 'INT`L0038338616',
  //       amount: '-£4.',
  //       neachy: '59',
  //       card: 'MATCHERINO',
  //     },
     
      
  //   ],
  // },
  // {
  //   title: 'Feb 6, 2025',
  //   price: '£9.23',
  //   items: [
  //     {
  //       id: '53',
  //       description: 'SHLR Ltd',
  //       amount: '-£1,380.',
  //       neachy: '00 ',
  //       card: 'Bill',
  //     },
  //     {
  //       id: '54',
  //       description: 'komalpreet Singh',
  //       amount: '-£120.',
  //       neachy: '00',
  //       card: 'Friend',
  //     },
  //     {
  //       id: '55',
  //       description: 'LPT CONSTRUCTION I',
  //       amount: '-£50.',
  //       neachy: '00',
  //       card: 'Bill',
  //     },
      
  //   ],
  // },
  // {
  //   title: 'Feb 5, 2025',
  //   price: '£1,559.23',
  //   items: [
  //     {
  //       id: '56',
  //       description: 'Karandeep singh',
  //       amount: '-£50.',
  //       neachy: '00',
  //       card: 'Personal',
  //     },
  //     {
  //       id: '57',
  //       description: '401672 15040477',
  //       amount: '-£400.',
  //       neachy: '00',
  //       card: 'INTERNET TRANSFEER',
  //     },
  //     {
  //       id: '58',
  //       description: 'Mehakdeep Singh',
  //       amount: '-£680.',
  //       neachy: '00',
  //       card: 'Family',
  //     },
     
      
  //   ],
  // },
  // {
  //   title: 'Feb 4, 2025',
  //   price: '£2,689.23',
  //   items: [
  //     {
  //       id: '59',
  //       description: 'HR03 BUILDS LIMTE',
  //       amount: '-£2,685.',
  //       neachy: '20',
  //       card: 'WAGES',
  //     },
  //     {
  //       id: '70',
  //       description: 'Sabrina ciurar',
  //       amount: '-£500.',
  //       neachy: '00',
  //       card: 'Friend',
  //     },
  //     {
  //       id: '71',
  //       description: 'SHLR Ltd',
  //       amount: '-£2,000   .',
  //       neachy: '00 ',
  //       card: 'Bill',
  //     },
  //     {
  //       id: '72',
  //       description: 'Robinjit Singh',
  //       amount: '-£2,500.',
  //       neachy: '00',
  //       card: 'Karandeep Singh',
  //     },
     
      
  //   ],
  // },
  // {
  //   title: 'Jan 28, 2025',
  //   price: '£4.03',
  //   items: [
  //     {
  //       id: '73',
  //       description: 'Gursharan kaur',
  //       amount: '-£250.',
  //       neachy: '20',
  //       card: 'Friend',
  //     },
  //     {
  //       id: '74',
  //       description: 'VKK GLOBAL LTD',
  //       amount: '-£145.',
  //       neachy: '00',
  //       card: 'VKK GLOBAL LTD',
  //     },
  //     {
  //       id: '75',
  //       description: 'SHLR Ltd',
  //       amount: '-£285.',
  //       neachy: '00',
  //       card: 'Bill',
  //     },
  //     {
  //       id: '76',
  //       description: 'HR03 BULDS LIMTE ',
  //       amount: '-£387.',
  //       neachy: '56',
  //       card: 'WAGES',
  //     },
      
  //   ],
  // },
  // {
  //   title: 'Jan 22, 2025',
  //   price: '£6.47',
  //   items: [
  //     {
  //       id: '77',
  //       description: 'Sandeep Singh',
  //       amount: '-£200.',
  //       neachy: '00',
  //       card: 'Family',
  //     },
  //     {
  //       id: '78',
  //       description: 'VKK GLOBAL LTD',
  //       amount: '-£200.',
  //       neachy: '00',
  //       card: 'Wages',
  //     },
  //     {
  //       id: '79',
  //       description: 'SHLR Ltd',
  //       amount: '-£10.',
  //       neachy: '00',
  //       card: 'Bill',
  //     },
     
      
  //   ],
  // },
  // {
  //   title: 'Jan 21, 2025',
  //   price: '£16.47',
  //   items: [
  //     {
  //       id: '80',
  //       description: 'SHLR Ltd',
  //       amount: '-£180.',
  //       neachy: '00',
  //       card: 'Bill',
  //     },
  //     {
  //       id: '81',
  //       description: 'ARPANDEEP SINGH',
  //       amount: '-£195.',
  //       neachy: '00',
  //       card: 'Family',
  //     },
     
     
      
  //   ],
  // },
  // {
  //   title: 'Jan 19, 2025',
  //   price: '£1.47',
  //   items: [
  //     {
  //       id: '82',
  //       description: 'SHLR Ltd',
  //       amount: '-£71.',
  //       neachy: '00',
  //       card: 'Bill',
  //     },
     
     
      
  //   ],
  // },
  // {
  //   title: 'Jan 18, 2025',
  //   price: '£72.47',
  //   items: [
  //     {
  //       id: '83',
  //       description: 'ARPANDEEP SINGH',
  //       amount: '-£70.',
  //       neachy: '00',
  //       card: 'FRIEND',
  //     },
     

     
     
      
  //   ],
  // },
 

  // {
  //   title: 'Jan 15, 2025',
  //   price: '£6.22',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'Gaurav Saini',
  //       amount: '-£330.',
  //       neachy: '00',
  //       card: 'personal',
  //     },
   
  //     {
  //       id: '1',
  //       description: 'Gaurav Saini',
  //       amount: '-£1,620.',
  //       neachy: '00',
  //       card: 'pisp1376634890',
  //     },
  //     {
  //       id: '1',
  //       description: 'KS LOGISTICS LTD',
  //       amount: '£1950.',
  //       neachy: '00',
  //       card: 'INVOICE',
  //       GREEN:true
  //     },
  //     {
  //       id: '1',
  //       description: 'Gaurav Saini',
  //       amount: '£330.',
  //       neachy: '00',
  //       card: 'gaurav',
  //       GREEN:true
  //     },
  //   ],
  // },
  // {
  //   title: 'Jan 13, 2025',
  //   price: '£1.22',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'SWIFT AUTO GARAGE',
  //       amount: '-£60.',
  //       neachy: '00',
  //       card: 'Harrow',
  //     },
   
  //     {
  //       id: '1',
  //       description: 'SWIFT AUTO GARAGE',
  //       amount: '-£60.',
  //       neachy: '00',
  //       card: 'Harrow',
  //     },
  //   ],
  // },
  // {
  //   title: 'Jan 11, 2025',
  //   price: '£121.22',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'Gaurav Saini',
  //       amount: '-£7.',
  //       neachy: '00',
  //       card: 'pisp1371517765',
  //     },
   
  //     {
  //       id: '1',
  //       description: 'Gaurav Saini',
  //       amount: '£7.',
  //       neachy: '00',
  //       card: 'gaurav',
  //       GREEN:true
  //     },
  //   ],
  // },
  // {
  //   title: 'Jan 10, 2025',
  //   price: '£121.22',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'KS LOGISTICS LTD',
  //       amount: '£120.',
  //       neachy: '00',
  //       card: 'INVOICE',
  //       GREEN:true
  //     },
   
     
  //   ],
  // },
  // {
  //   title: 'Jan 3, 2025',
  //   price: '£1.22',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'NYX*EuroGaraesLtd',
  //       amount: '-£1.',
  //       neachy: '00',
  //       card: 'Borehamwood',
  //     },
   
     
  //   ],
  // },
  // {
  //   title: 'Dec 17, 2024',
  //   price: '£106.90',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'CASH NOTEMAC DEC17',
  //       amount: '-£50.',
  //       neachy: '00',
  //       card: 'Notemachine @21:47',
  //     },
  //     {
  //       id: '1',
  //       description: 'CASH NOTEMAC DEC17',
  //       amount: '-£250.',
  //       neachy: '00',
  //       card: 'Notemachine @21:47',
  //     },
  //     {
  //       id: '1',
  //       description: 'SANIYA MIRZA ',
  //       amount: '£100.',
  //       neachy: '00',
  //       card: 'PAYMENT',
  //       GREEN:true
  //     },
  //     {
  //       id: '1',
  //       description: 'HUTTE SUPERMARKET ',
  //       amount: '-£33.',
  //       neachy: '80',
  //       card: 'ILFORD IG1',
  //     },
  //     {
  //       id: '1',
  //       description: 'COLONY RESTAURANT',
  //       amount: '-£13.',
  //       neachy: '30',
  //       card: 'ILFORD',
  //     },
  //     {
  //       id: '1',
  //       description: 'CASH BNKM DEC16',
  //       amount: '-£50.',
  //       neachy: '00',
  //       card: 'MFG-LOXFOR@23:54',
  //     },
  //     {
  //       id: '1',
  //       description: 'CASH BNKM DEC16',
  //       amount: '-£250.',
  //       neachy: '00',
  //       card: 'MFG-LOXFOR@23:53',
  //     },
  //   ],
  // },
  // {
  //   title: 'Dec 16, 2024',
  //   price: '£754.00',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'MIRZA S',
  //       amount: '£750.',
  //       neachy: '00',
  //       card: 'PAYMENT',
  //       GREEN:true
  //     },
  //   ],
  // },
  // {
  //   title: 'Dec 13, 2024',
  //   price: '£4.00',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'NISA LOCAL',
  //       amount: '-£41.',
  //       neachy: '19',
  //       card: 'LONDON',
  //     },
  //   ],
  // },
  // {
  //   title: 'Dec 12, 2024',
  //   price: '£45.19',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'Saniya Mirza',
  //       amount: '-£60.',
  //       neachy: '00',
  //       card: 'PAYMENT',
  //     },
  //     {
  //       id: '1',
  //       description: 'Saniya Mirza',
  //       amount: '-£2,600.',
  //       neachy: '00',
  //       card: 'PAYMENT',
  //     },
  //   ],
  // },
  // {
  //   title: 'Dec 11, 2024',
  //   price: '£2,705.19',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'CASH RB SCOT DEC11',
  //       amount: '-£50.',
  //       neachy: '00',
  //       card: 'TESCO LRV DO@21:43',
  //     },
  //     {
  //       id: '1',
  //       description: 'CASH RB SCOT DEC11',
  //       amount: '-£250.',
  //       neachy: '00',
  //       card: 'TESCO LRV DO@21:42',
  //     },
  //     {
  //       id: '1',
  //       description: '2024121100166838',
  //       amount: '-£5.',
  //       neachy: '00',
  //       card: 'RBS11124H9VP1KG0',
  //     },
  //     {
  //       id: '1',
  //       description: 'ADVICE CONFIRMS',
  //       amount: '£2,998.',
  //       neachy: '48',
  //       card: 'RBS11124H9VP1KG0',
  //       GREEN:true
  //     },
  //   ],
  // },
  // {
  //   title: 'Dec 3, 2024',
  //   price: '£11.71',
  //   items: [
    
  //     {
  //       id: '1',
  //       description: 'MIRZA S',
  //       amount: '£10.',
  //       neachy: '00',
  //       card: 'PAYMENT',
  //       GREEN:true
  //     },
  //   ],
  // },
  // {
  //   title: 'NOV 18, 2024',
  //   price: '£1.71',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'THE OFFY',
  //       amount: '-£2.',
  //       neachy: '79',
  //       card: 'ENFIELD',
  //     },
  //     {
  //       id: '1',
  //       description: 'THE OFFY',
  //       amount: '-£3.',
  //       neachy: '00',
  //       card: 'ENFIELD',
  //     },
  //     {
  //       id: '1',
  //       description: 'TGF PIZZA',
  //       amount: '-£12.',
  //       neachy: '80',
  //       card: 'ENFIELD',
  //     },
  //     {
  //       id: '1',
  //       description: 'ENFIELD FOOD CENTER',
  //       amount: '-£9.',
  //       neachy: '70',
  //       card: 'ENFIELD',
  //     },
  //   ],
  // },
  // {
  //   title: 'Nov 16, 2024',
  //   price: '£30.00',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'CASH NOTEMAC NOV16',
  //       amount: '-£30.',
  //       neachy: '00',
  //       card: 'Notemachine @19:56',
  //     },
      
  //   ],
  // },  
  // {
  //   title: 'Nov 15, 2024',
  //   price: '£60.00',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'SANIYA MIRZA',
  //       amount: '£50.',
  //       neachy: '00',
  //       card: 'PAYMENT',
  //       GREEN:true
  //     },
      
  //   ],
  // }, 
  //  {
  //   title: 'NOV 14, 2024',
  //   price: '£1.71',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'CASH NOTEMAC NOV14',
  //       amount: '-£50.',
  //       neachy: '00',
  //       card: 'Notemachine @19:13',
  //     },
  //     {
  //       id: '1',
  //       description: 'Zaki Akhtar',
  //       amount: '£40.',
  //       neachy: '00',
  //       card: 'Sent from Revolut',
  //       GREEN:true
  //     },
     
  //   ],
  // },
  // {
  //   title: 'NOV 13, 2024',
  //   price: '£20.00',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'Aziz',
  //       amount: '-£5.',
  //       neachy: '00',
  //       card: 'Payment',
  //     },
  //     {
  //       id: '1',
  //       description: 'Abdul mateen',
  //       amount: '£5.',
  //       neachy: '00',
  //       card: 'Payment',
  //       GREEN:true
  //     },
     
  //   ],
  // },
  // {
  //   title: 'NOV 9, 2024',
  //   price: '£30.00',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'Saniya Mirza',
  //       amount: '£20.',
  //       neachy: '00',
  //       card: 'Saniya Nirza Saniy',
  //       GREEN:true
  //     },
  //     {
  //       id: '1',
  //       description: 'Saniya Mirza',
  //       amount: '-£10.',
  //       neachy: '00',
  //       card: 'payment',
  //     },
  //     {
  //       id: '1',
  //       description: 'Saniya Mirza',
  //       amount: '£20.',
  //       neachy: '00',
  //       card: '',
  //       GREEN:true
  //     },
    
     
  //   ],
  // },
 
  
];
const height = Dimensions.get('screen').height
const BankAccount = ({navigation}) => {
  useEffect(() => {
    // RBSheet ko automatically open karne ke liye
    refRBSheet.current.open();
  }, []);
  const panY = useRef(new Animated.Value(300)).current; // Initial position set to 300 (partially visible)
  const refRBSheet = useRef();

const panResponder = useRef(
  PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      // Y position ko update karte waqt ensure karte hain ke sheet 300 ke niche na jaye (maximum limit)
      const newPanY = Math.max(300, gestureState.dy); // 300 ek limit hai, jahan sheet ruk jayegi
      panY.setValue(newPanY); // Y position ko update karte hain
    },
    onPanResponderRelease: (_, gestureState) => {
      const { dy } = gestureState;

      // Adjust position when release based on movement
      if (dy > 250) {
        // If swipe is down, close the sheet to 300 (partial close)
        Animated.spring(panY, {
          toValue: 300, // Partial close
          useNativeDriver: true,
          stiffness: 200,
        }).start();
      } else {
        // If swipe is up, open the sheet to its maximum visible position
        Animated.spring(panY, {
          toValue: 0, // Fully open
          useNativeDriver: true,
          stiffness: 200,
        }).start();
      }
    },
  })
).current;
const [sheetHeight, setSheetHeight] = useState(Dimensions.get('screen').height / 1.2);

const onSheetDrag = (value) => {
  if (value === 'expand') {
    setSheetHeight(Dimensions.get('screen').height); 
  } else if (value === 'collapse') {
    setSheetHeight(Dimensions.get('screen').height / 1); 
  }
};
  const renderSection = ({ item, index }) => (
    <View style={styles.section}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 5,
          backgroundColor: '#EDEDED',
        }}>
        <Text style={styles.titles}>{item.title}</Text>
        <Text style={styles.titless}>{item.price}</Text>
      </View>

      <FlatList
        data={item.items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      scrollEnabled={true}
      />
    </View>
  );

  // Render karne ke liye har item ki styling aur structure
  const renderItem = ({ item, index }: any) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <View style={styles.info}>
          <Text style={styles.name}>{item.description}</Text>
          <Text style={{ fontSize: 14, color: 'grey' }}>{item.card}</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text
          style={[
            styles.prices,
            { color: item?.GREEN == true ? '#168881' : '#444245' },
          ]}>
          {item.amount}
          <Text style={{ fontSize: 13 }}>{item?.neachy}</Text>
        </Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#CDD4D5' }}>
      <View
        style={{
          height: 80,
          backgroundColor: White,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View style={{ height: '100%', flexDirection: 'row' }}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="arrow-back-outline" size={25} color={Black} />
          </TouchableOpacity>
          <View style={{ justifyContent: 'center', marginHorizontal: 10,alignItems:'center',width:'80%', }}>
            <Text style={{ color: Black, fontSize: 16,fontWeight:'500' }}>BANK A/C</Text>
            <Text style={{ color: Black,fontWeight:'500' }}>40-11-93  02038625</Text>
          </View>
        </View>
        <View
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="ellipsis-vertical" size={20} color={Black} />
        </View>
      </View>
      <View
        style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: Black, fontSize: 25 }}>£1.93</Text>
        <Text style={{ color: Black, marginVertical: 2 }}>
          Arranged overdraft : £0.00
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 2,
          justifyContent: 'center',
          backgroundColor: White,
          marginHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderColor: '#D3D3D',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 50,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="stats-chart-outline" color={Black} size={24} />
            </View>
            <View style={{ height: 50, justifyContent: 'center' }}>
              <Text style={{ color: Black }}> Balance After Bills</Text>
              <Text style={{ color: Black }}>Learn More</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="chevron-forward-outline" size={25} color={Black} />
          </View>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 2,
          justifyContent: 'center',
          backgroundColor: White,
          marginHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderColor: '#D3D3D',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 50,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="arrow-up-circle-outline" color={Black} size={24} />
            </View>
            <View style={{ height: 50, justifyContent: 'center' }}>
              <Text style={{ color: Black }}>Manage bills</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="chevron-forward-outline" size={25} color={Black} />
          </View>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 2,
          justifyContent: 'center',
          backgroundColor: White,
          marginHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderColor: '#D3D3D',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 50,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="ellipsis-horizontal" color={Black} size={24} />
            </View>
            <View style={{ height: 50, justifyContent: 'center' }}>
              <Text style={{ color: Black }}>View more</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="chevron-forward-outline" size={25} color={Black} />
          </View>
        </View>
      </View>
      <View style={{height:100,marginVertical:20,marginHorizontal:10, justifyContent:'center'}}>
   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
    <Text style={{color:Black}}>Available balance</Text>
    <Text style={{color:Black}}>£1.93</Text>

   </View>
   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
    <Text style={{color:Black}}>Balance at</Text>
    <Text style={{color:Black}}>12:57 GMT on 6 MAR</Text>

   </View>
   <View style={{flexDirection:'row',justifyContent:'space-between',}}>
    <Text style={{color:'#CDD4D5'}}>Available balance</Text>
    <Text style={{color:Black}}>2025</Text>

   </View>
   </View>
   <RBSheet
  ref={refRBSheet}
  closeOnPressMask={true}
  openDuration={0}
  closeOnDragDown={true}
  closeOnPressBack={false}
  draggable={true}
  height={390} // specify the height
  minClosingHeight={0} // set it to 0 for full closure
  dragFromTopOnly={false}
  customStyles={{
    wrapper: {
      backgroundColor: 'transparent',
    },
    draggableIcon: {
      backgroundColor: '#EDEDED',
      width: 80,
      alignSelf: 'center',
    },
    container: {
      height:Dimensions.get('screen').height/2.2, // match this height
    },
  }}
  onDragEnd={() => {
    // Ensure the sheet doesn't go above the top
    if (refRBSheet.current.getCurrentPosition() < 0) {
      refRBSheet.current.setState({ height: 690 });
    }
  }}
>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
    <Text style={{color:'black', fontWeight:'800', fontSize:18}}>Transactions</Text>
    <Icon name='search' color={'black'} size={22}/>
  </View>
  <FlatList
    data={transactions}
    renderItem={renderSection}
    keyExtractor={(item, index) => index.toString()}
    contentContainerStyle={{ backgroundColor: 'white' }}
  />
</RBSheet>

      
    
     
      {/* </View> */}

    </SafeAreaView>
  );
};

export default BankAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  prices: {
    fontSize: 14, // Main price size
    color: '#444245',
    marginVertical: 5,
    fontWeight: '500',
  },
  price: {
    fontSize: 24, // Main price size
    color: '#444245',
    marginVertical: 5,
    fontWeight: '500',
  },

  decimalPart: {
    fontSize: 14, // Smaller size for decimal part
    color: '#444245',
  },
  decimalParts: {
    fontSize: 11, // Smaller size for decimal part
    color: '#444245',
  },
  titles: {
    color: Black,
    fontSize: 14,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  titless: {
    color: Black,
    fontSize: 15,
    marginHorizontal: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: 'relative',
    alignItems: 'center',
  },
 
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
   
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    zIndex:999
  },
  handle: {
    width: 60,
    height: 6,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  tabText: {
    fontSize: 16,
    color: '#777', // Default color for tabs
  },
  activeTabText: {
    color: '#000', // Active tab text color
    fontWeight: 'bold',
  },
  activeTabIndicator: {
    position: 'absolute',
    bottom: -5,
    height: 4,
    width: '500%',
    backgroundColor: 'red', // Color of the bottom indicator
    borderRadius: 2,
  },
  progressBars: {
    marginLeft: 10,
    height: 12, // Height of the progress bar
    width: '50%', // Width of the progress bar
    backgroundColor: '#fff', // Background color for empty progress
    overflow: 'hidden', // Prevent overflow on rounding
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  progressBar: {
    marginLeft: 10,
    height: 12, // Height of the progress bar
    width: '50%', // Width of the progress bar
    backgroundColor: '#fff', // Background color for empty progress
    overflow: 'hidden', // Prevent overflow on rounding
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  progressFilled: {
    height: '100%', // Full height of the progress bar
    width: '50%', // Fill halfway (50%)
    backgroundColor: '#6BB24D', // Color of the filled portion
  },
  progressFilleds: {
    height: '100%', // Full height of the progress bar
    width: '50%', // Fill halfway (50%)
    backgroundColor: '#899c82', // Color of the filled portion
  },
  balance: {
    fontSize: 25,
    color: '#99A684',
    marginHorizontal: 30,
  },

  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  accountTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  balanceSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    fontSize: 16,
    color: '#888',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  transactionItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginHorizontal: 10,
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  transactionDetails: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-between', // This will spread out the elements
  },
  iconWrapper: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 15, // Set to 15 for a perfect circle
    marginRight: 10, // Add margin to separate the icon from the description
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionWrapper: {
    flex: 1, // Take up available space
    padding: 5, // Add padding inside the description container
    marginRight: 10, // Add margin to separate from the amount
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  amount: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    margin: 8,
    borderColor: '#eae6df',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: '110%',
    width: '100%',
    resizeMode: 'cover',
  },
  info: {
    marginLeft: 10,
  },
  name: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  nachy: {
    color: '#999B9E',
    fontSize: 12,
  },
  priceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginTop: 20,
    backgroundColor: White,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});