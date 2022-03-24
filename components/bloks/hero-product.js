// a hero component

// *************************
// - content: Bloks
// - background_image: Asset (image)
// - height: string

import RichTextRenderer from "../richTextRenderer"
import { blockIterator } from "../../utils/blockIterator"
import { Image } from "@storyofams/storyblok-toolkit"

const Hero = ({ blok: hero }) => {
  const {
    background_image,
    buttons,
    // height,
    text,
    title,
    // border_color,
    // background_color,
    // type,
  } = hero

  return (
    <div className="relative bg-black overflow-hidden lg:flex">
      {/* CONTENT */}
      <div className="max-w-[1000px] mx-auto 2xl:mx-0 xl:pt-14 xl:pb-14 lg:flex items-center bg-dark-table-md lg:bg-dark-table">
        <div
          className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32
          
        "
        >
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

          <div className="relative mt-10 z-20 mx-auto  px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 xl:pl-20 xl:px-20">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{title}</span>{" "}
                {/* <span className="block text-indigo-600 xl:inline">
                  online business
                </span> */}
              </h1>
              <div className="mt-8 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-10 md:text-xl lg:mx-0">
                <RichTextRenderer data={text} />
              </div>
              <div className="mt-8 sm:mt-10 md:mt-10 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-5">
                {buttons.length > 0 && blockIterator(buttons)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* IMAGE */}
      <div className="lg:inset-y-0 lg:right-0 lg:w-[69%]   z-30 relative ">
        <div
          className="
           w-full  
          lg:absolutes lg:left-0 lg:-bottom-0 lg:top-0 
          lg:w-[1800px] 
         "
        >
          <Image
            src={background_image?.filename}
            alt={background_image?.alt}
            fluid={2047}
            focus={background_image?.focus}
            fit="contain"
            className=""
          />
        </div>
      </div>
      {/* <div className="hidden md:flex justify-center items-center w-full mt-10 relative bottom-56 z-30 lg:hidden">
        <div className="pb-4 text-primary text-lg">more</div>
        <div className="scroll-down-chevron"></div>
        <div className="scroll-down-chevron"></div>
        <div className="scroll-down-chevron"></div>
        <div className="scroll-down-chevron"></div>
      </div> */}
    </div>
  )
}

export default Hero

// const oldHero = (
//   <HeroTemplate
//     title={title}
//     background_image={background_image}
//     text={text}
//     buttons={buttons}
//     border_color={border_color}
//     height={height}
//     background_color={background_color}
//   >
//     {/* MAIN HEADING */}
//     <h1 className="text-left text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl max-w-sm md:max-w-none ">
//       <span className="block text-white max-w-xs md:max-w-sm lg:max-w-xl ">
//         {title}
//       </span>
//       {/* <span className="block text-green-200">customer support</span> */}
//     </h1>
//     {/* PARAGRAPH */}
//     <div
//       className="mt-6 text-left
//         text-base sm:text-lg lg:text-xl
//         text-stone-400
//         leading-relaxed
//         tracking-wide
//          max-w-xs mr-32 md:mr-0 lg:max-w-md"
//     >
//       <RichTextRenderer data={text} />
//     </div>

//     {/* BUTTONS */}
//     {buttons.length > 0 && (
//       <div className="mt-10 max-w-sm sm:max-w-none sm:flex">
//         <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
//           {blockIterator(buttons)}
//         </div>
//       </div>
//     )}

//     {/* END BUTTONS */}
//   </HeroTemplate>
// )

const svgverticalborder = (
  <svg
    className="hidden lg:block absolute right-0 inset-y-0 h-full w-14 text-tertiary-0 transform translate-x-1/2"
    fill="currentColor"
    viewBox="0 0 133 1910"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path d="M53.2293 19.3333C55.4093 18.9733 54.9594 16.3933 55.3094 14.6833C55.5894 13.2733 54.5693 12.2133 53.9293 11.0433C52.3896 8.4723 51.5807 5.53001 51.5894 2.53328C51.5894 1.53328 51.3293 0.363267 52.7393 0.173267C54.1493 -0.0167325 56.4892 -0.216727 56.4092 0.553272C56.0292 4.09327 60.1994 5.72326 59.0294 10.2933C57.6694 15.5733 59.8293 21.7333 60.4893 27.5133C60.5693 28.2433 61.0494 28.8733 61.7794 28.6733C62.375 28.4125 62.8648 27.9579 63.1692 27.3833C63.9792 26.0633 63.2893 24.8133 62.7593 23.5933C61.4993 20.6833 62.1793 18.1733 64.2193 15.3633C64.8593 22.2733 65.3294 28.5833 66.0494 34.8533C68.6194 57.2533 68.6592 79.9333 73.6392 102.073C74.1292 104.263 74.7494 107.073 73.8194 108.783C72.1294 111.943 72.7293 114.393 74.4993 116.913C75.7493 118.703 76.6994 121.493 75.5694 122.443C72.5694 124.913 75.3093 127.133 74.7293 129.443C76.5893 129.323 75.3092 127.393 76.3592 127.043C78.3592 138.803 79.6892 150.503 80.6092 162.273C81.2492 170.443 82.2894 178.583 83.3294 186.713C84.3294 194.273 84.0892 202.043 84.8892 209.713C85.4492 215.173 86.1793 220.623 86.6793 226.093C86.9193 228.703 89.4694 230.093 88.3394 233.983C86.9094 238.843 89.0893 244.743 89.7493 250.193C89.8293 250.793 89.9194 251.583 90.8394 251.623C91.7594 251.663 92.2592 250.863 92.6092 250.133C93.1692 248.963 92.6893 247.853 92.1893 246.793C90.7993 243.793 91.4894 241.153 93.5894 238.033C94.5894 249.143 95.4192 259.563 96.3592 269.973C98.5792 294.507 100.816 319.03 103.069 343.543C104.209 355.853 104.559 368.223 105.649 380.543C106.249 387.283 105.289 394.593 109.649 400.643C111.019 402.543 107.429 403.883 109.359 405.573C111.289 407.263 110.789 409.833 111.239 412.073C113.169 421.763 112.099 431.613 113.049 441.393C115.369 465.213 118.599 488.943 120.799 512.783C122.349 529.673 123.919 546.563 125.379 563.473C126.339 574.587 127.199 585.703 127.959 596.823C129.299 616.413 131.509 635.963 131.549 655.623C131.549 660.953 131.319 666.293 131.549 671.623C132.099 686.623 133.949 701.623 130.549 716.483C129.739 719.983 131.429 723.343 131.449 726.863C131.529 741.933 131.679 757.013 131.529 772.093C131.389 787.533 132.419 803.013 131.819 818.423C130.709 847.173 129.689 875.943 127.329 904.633C126.509 914.553 125.159 924.423 124.049 934.323C123.562 932.88 123.399 931.347 123.569 929.833C125.159 915.513 124.919 901.023 127.249 886.833C127.969 882.413 125.249 878.323 126.839 874.093C129.309 867.393 128.759 860.423 128.399 853.593C128.249 850.593 130.239 847.323 129.069 845.183C125.239 838.183 132.069 831.183 128.419 824.473C128.419 824.373 128.499 824.163 128.579 824.013C133.529 814.823 126.639 804.923 130.249 795.613C130.449 795.103 129.499 794.193 129.189 793.433C128.279 791.183 127.899 788.503 129.089 786.653C131.549 782.843 130.499 778.953 130.229 775.093L129.959 770.883C129.709 766.883 127.749 762.943 130.429 759.053C130.539 758.903 130.289 758.413 130.079 758.183C127.299 754.943 128.439 751.433 129.409 747.983C130.409 744.383 131.189 740.563 129.259 737.333C128.259 735.593 128.189 734.073 127.869 732.333C126.699 726.093 129.739 720.203 129.199 713.903C128.949 710.983 127.269 708.803 127.199 705.683C127.109 691.963 127.779 678.213 126.469 664.503C126.029 659.883 125.949 655.223 124.789 650.633C124.001 653.13 123.616 655.736 123.649 658.353C124.079 667.663 124.589 676.973 124.899 686.293C125.439 703.093 126.039 719.893 126.269 736.693C126.559 758.323 126.579 779.953 126.579 801.593C126.579 814.733 126.749 827.903 126.089 841.023C124.739 867.613 123.819 894.223 121.289 920.733C119.969 934.653 119.189 948.613 117.989 962.543C115.749 988.743 113.159 1014.91 111.149 1041.12C109.799 1058.71 109.019 1076.35 108.319 1093.98C107.939 1103.62 107.799 1113.32 108.319 1122.98C108.929 1133.26 110.219 1143.46 107.319 1153.61C106.656 1155.7 106.684 1157.95 107.399 1160.02C109.149 1164.59 107.129 1168.73 106.399 1173.02C106.259 1168.86 106.309 1164.73 106.229 1160.61C106.229 1159.42 106.949 1157.47 105.019 1157.37C104.257 1157.31 103.494 1157.49 102.848 1157.9C102.203 1158.31 101.711 1158.92 101.449 1159.64C100.91 1161.22 100.574 1162.86 100.449 1164.52C100.239 1170.83 100.179 1177.15 100.089 1183.52C100.089 1184.52 99.8793 1185.69 100.739 1186.32C102.849 1187.87 102.029 1190.06 101.839 1191.84C101.189 1198.1 99.5093 1204.32 99.4893 1210.55C99.4893 1217.85 96.7093 1225.49 100.779 1232.5C101.412 1233.79 101.636 1235.24 101.419 1236.65C100.039 1243.82 98.1091 1250.93 98.8591 1258.36C98.9891 1259.62 98.2892 1260.95 98.1892 1262.26C97.8892 1266.35 97.4992 1270.47 98.9192 1274.44C101.019 1271.71 99.5491 1268.55 100.859 1265.02C101.139 1275.61 101.859 1285.45 101.609 1295.18C101.429 1303.78 101.529 1312.43 100.969 1321.04C100.789 1323.89 102.049 1327.12 98.5894 1329.1C98.4012 1329.2 98.2439 1329.35 98.1343 1329.54C98.0247 1329.72 97.9668 1329.93 97.9668 1330.14C97.9668 1330.36 98.0247 1330.57 98.1343 1330.75C98.2439 1330.93 98.4012 1331.08 98.5894 1331.18C100.429 1332.1 99.5893 1333.74 99.9793 1335.08C101.339 1340.08 100.399 1345.28 100.759 1350.37C101.449 1359.99 99.2792 1369.57 100.169 1379.2C100.169 1379.65 99.9993 1380.45 99.7293 1380.54C95.1993 1382 97.4192 1385.61 97.1292 1388.4C97.1292 1388.59 97.4193 1388.81 97.5793 1389.02C98.3193 1388.27 97.5792 1386.96 99.9092 1385.75C99.4692 1404.92 98.5792 1423.45 99.1592 1442.34C97.4592 1441.51 97.5493 1439.88 95.9893 1439.87C94.8993 1442.38 95.8892 1444.87 95.7292 1447.31C94.4692 1466.41 93.8926 1485.52 93.9993 1504.64C94.0693 1516.88 94.5493 1529.14 94.5393 1541.39C94.5393 1568.17 94.0293 1594.94 92.7993 1621.69C92.3593 1631.42 91.2592 1641.13 90.4592 1650.84C90.5292 1634.4 91.2792 1618.01 92.2292 1601.63C92.5092 1596.73 89.8693 1591.86 92.0093 1587.02C93.7193 1583.14 93.3793 1579.02 92.8293 1575.22C91.9863 1568.52 91.652 1561.77 91.8293 1555.02C91.9893 1541.02 91.3493 1527.02 92.0793 1513.08C92.0923 1512.09 91.9228 1511.11 91.5793 1510.18C90.5793 1507.25 90.2992 1504.41 91.6692 1501.47C92.1085 1500.4 92.2667 1499.23 92.1291 1498.07C91.4292 1490.65 88.9991 1483.29 91.6091 1475.79C91.6344 1475.56 91.6093 1475.31 91.5352 1475.09C91.4611 1474.86 91.3397 1474.65 91.1792 1474.47C88.5592 1471.41 89.3192 1467.92 90.1792 1464.61C90.9792 1461.61 91.7692 1458.08 90.3992 1455.83C87.8292 1451.59 88.5393 1446.97 87.2893 1442.61C86.9293 1449.94 86.3893 1457.28 87.0493 1464.5C88.3493 1478.79 88.2092 1493.11 88.6492 1507.4C89.4792 1534.66 89.7891 1561.94 89.0991 1589.24C88.5491 1611.24 87.3691 1633.14 86.3491 1655.08C84.7691 1689 82.1893 1722.88 80.7993 1756.81C79.5893 1786.09 78.7993 1815.4 80.2893 1844.71C80.3677 1847.54 80.2004 1850.37 79.7893 1853.16C79.3093 1856.91 77.9593 1860.22 74.3193 1862.16C73.5451 1862.51 72.8845 1863.07 72.4126 1863.78C71.9407 1864.49 71.6761 1865.31 71.6492 1866.16C71.4892 1872.64 69.4092 1879.16 70.7292 1885.55C72.3792 1893.55 68.4292 1899.4 64.4292 1905.16C62.5192 1907.93 61.1293 1910.41 61.5593 1914.77C60.1593 1913.01 60.6092 1910.77 58.9392 1911.01C57.2692 1911.25 57.5093 1913.01 57.2693 1914.23C56.9593 1915.86 56.7392 1917.5 56.4792 1919.14L54.4792 1919.14C54.1492 1918.14 54.2091 1916.71 52.6191 1916.9C51.3491 1917.05 51.4392 1918.19 51.4392 1919.14L-0.00106045 1919.14L-0.000976564 0.0335164C124.699 0.0335218 38.8192 0.0332826 45.1492 0.0332829C47.3992 0.033283 48.1493 0.703283 48.6693 3.03328C49.5493 7.24328 48.5094 11.7733 50.8094 15.7333C51.6694 16.9733 50.8093 19.7233 53.2293 19.3333ZM92.3394 1444.63L92.3394 1458.45C92.7294 1458.45 93.1193 1458.45 93.5093 1458.45C94.1893 1454.03 95.0394 1449.64 92.3394 1444.63ZM88.4592 1429.55L89.2192 1428.67C89.0092 1428.29 88.8492 1427.8 88.6992 1427.8C88.1392 1427.8 87.9993 1428.29 88.0493 1428.74C88.1472 1429.03 88.2888 1429.31 88.4692 1429.55L88.4592 1429.55ZM88.3591 1437.27C90.2691 1434.27 90.2691 1434.27 88.1191 1432.62C87.627 1434.14 87.7125 1435.79 88.3591 1437.24L88.3591 1437.27ZM92.1292 1441.04L92.1292 1440.54L92.1292 1441.05L92.1292 1441.04ZM96.4692 1427.71L96.2993 1428.59L96.6592 1429.22C96.7519 1428.94 96.8026 1428.64 96.8093 1428.33C96.7893 1428.12 96.5892 1427.92 96.4692 1427.71ZM93.7893 1425.49C89.8893 1430.03 89.5393 1434.75 92.2893 1438.73L93.7893 1425.49ZM91.5093 1417.59C90.5593 1417.88 89.6693 1418.69 90.5093 1418.92C93.4193 1419.73 91.2791 1421.92 92.8691 1423.35C92.8691 1421.6 92.8691 1419.85 92.8691 1418.11C92.8191 1416.8 92.3392 1417.34 91.4692 1417.59L91.5093 1417.59ZM91.7092 1399.13C91.0592 1400.87 91.0592 1402.79 91.7092 1404.53L91.7092 1399.13ZM91.9092 1344.98C90.3492 1350.91 90.3992 1388.09 92.1692 1391.23C91.0292 1375.14 94.5992 1360.07 91.9092 1344.98ZM98.5293 1324.43C98.3893 1324.5 98.1091 1324.61 98.1191 1324.65C98.2009 1324.93 98.2977 1325.21 98.4092 1325.47C98.5492 1325.39 98.8093 1325.28 98.7993 1325.23C98.7335 1324.96 98.6431 1324.69 98.5293 1324.43ZM98.3591 1300.74C98.3718 1300.82 98.4018 1300.9 98.4468 1300.96C98.4917 1301.03 98.5505 1301.08 98.6191 1301.12C98.6891 1301.12 98.8592 1300.99 98.9592 1300.92C99.0592 1300.85 99.0292 1300.53 98.9592 1300.46C98.6292 1300.18 98.3891 1300.3 98.3591 1300.74ZM93.1592 1266.29C92.7392 1286.69 90.3493 1307.16 92.4893 1327.7C93.7493 1307.24 94.4692 1286.86 93.1592 1266.29ZM94.6192 1251.44C94.0092 1251.44 93.8493 1251.92 93.7693 1252.44C93.6893 1252.96 93.8392 1253.49 94.4092 1253.44C94.6692 1253.44 94.8493 1252.74 95.0193 1252.44C94.8493 1251.97 94.7492 1251.45 94.6192 1251.44ZM113.769 793.883C115.969 786.003 115.239 778.003 114.769 770.023C112.569 777.903 113.629 785.913 113.769 793.883ZM118.259 739.883C117.145 746.61 116.5 753.407 116.329 760.223C116.259 762.833 115.939 765.453 115.839 768.033C115.389 779.223 118.499 790.613 114.129 801.593C113.977 801.975 113.908 802.385 113.927 802.795C113.946 803.206 114.052 803.607 114.239 803.973C116.289 808.633 115.159 813.443 114.179 817.973C113.239 822.353 111.999 826.433 113.119 831.093C114.517 836.388 114.856 841.907 114.119 847.333C112.959 854.793 113.579 862.333 113.289 869.773C112.999 877.423 112.949 885.123 112.039 892.703C109.93 909.794 109.338 927.038 110.269 944.233C118.219 876.383 120.079 808.243 118.259 739.923L118.259 739.883ZM131.099 701.613C130.929 701.823 130.629 702.033 130.619 702.253C130.609 702.473 130.869 702.743 131.009 702.993L131.539 702.323L131.099 701.613ZM118.009 513.983L116.549 514.043L117.429 526.373C118.627 522.366 118.827 518.126 118.009 514.023L118.009 513.983ZM91.3992 255.243C89.7392 255.243 89.4994 256.963 89.5294 258.243C89.579 260.885 89.8735 263.516 90.4092 266.103C91.4092 271.103 93.7592 275.783 91.9192 281.413C90.6992 285.133 91.8592 289.613 92.6492 293.703C92.8492 294.703 93.2293 295.783 94.4893 295.543C94.8993 295.427 95.2596 295.179 95.5145 294.837C95.7693 294.495 95.9044 294.079 95.8992 293.653C95.8992 292.503 95.7492 291.353 95.6592 290.203C95.0692 282.783 93.6593 275.423 93.9493 268.203C94.2907 264.811 94.2236 261.39 93.7493 258.013C93.5493 256.743 92.8792 255.163 91.3992 255.243ZM77.2193 151.243C75.2193 157.063 76.9993 161.563 77.9293 166.113C79.5593 161.343 78.7693 156.783 77.2193 151.183L77.2193 151.243ZM75.4893 140.613C75.1993 140.983 74.8592 141.223 74.8692 141.443C74.9597 141.876 75.1043 142.296 75.2994 142.693C75.4694 142.453 75.7794 142.213 75.7894 141.973C75.7395 141.489 75.632 141.012 75.4693 140.553L75.4893 140.613ZM61.7894 32.4133C60.4494 32.6533 60.1793 34.0633 60.2093 35.2233C60.3335 38.018 60.6475 40.8011 61.1492 43.5533C61.7592 47.2633 64.5892 50.7933 63.3892 54.4833C61.6592 59.8233 62.7393 64.9633 63.2193 70.1933C63.3293 71.3233 63.4193 72.8533 64.9793 72.7233C66.2993 72.6233 66.6992 71.2933 66.6392 70.0533C66.6392 69.0533 66.3494 68.0533 66.2794 67.0533C65.7994 59.7933 64.3992 52.6033 64.6092 45.5333C65.0169 41.9874 64.9194 38.4017 64.3194 34.8833C64.0794 33.6833 63.4694 32.0533 61.7894 32.3533L61.7894 32.4133Z" />
  </svg>
)
