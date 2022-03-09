const SectionBrush2 = ({ fill = "#FFFEFA", className = "" }) => {
  return (
    <svg
      viewBox="0 0 1920 60"
      fill="none"
      fill="none"
      viewBox="0 0 1920 128"
      className={`${className} h-[128px] 2xl:h-auto w-full
      absolute 
      -top-[80px] lg:-top-12 
      left-0
      `}
    >
      <path
        d="M1919.85 30.448L1920 60H0V25.6291C1.21886 25.5183 2.42473 25.3954 3.6436 25.264C8.17409 24.7832 12.2746 23.073 16.9421 22.6141C29.9227 21.3446 42.9592 20.7409 55.9378 18.6096C72.368 15.9111 89.2701 15.5045 105.908 13.3757C119.307 11.6631 132.895 11.6132 146.389 9.72411C164.08 7.23496 182.118 6.92458 199.947 4.82006C213.135 3.26693 226.615 4.78355 239.914 3.28032C253.145 1.77709 266.555 2.83727 279.827 0.951841C286.092 -0.0397202 292.447 0.230868 298.64 1.75275C303.516 3.28583 308.599 3.5878 313.574 2.64008C321.696 0.967992 329.94 0.347419 338.169 0.788738C345.956 1.08451 353.714 -0.640241 361.499 0.776566C362.612 1.0056 363.756 0.729277 364.714 0C363.8 3.52985 361.181 4.35023 357.288 4.39892C353.257 4.46099 349.682 3.14156 345.89 2.62426C336.622 1.38029 328.324 5.63071 319.429 6.62881C313.898 6.41945 308.786 4.55959 302.866 4.86875C298.767 5.07811 295.884 7.5916 291.521 7.08647C279.676 5.70618 267.914 9.05831 255.903 8.4911C250.763 8.24767 244.889 7.11081 240.663 7.96163C231.894 9.72411 222.986 10.8208 213.205 12.324C221.212 14.7268 228.057 12.6076 235.025 12.3362C254.102 11.6059 273.095 9.83488 292.158 9.08266C299.057 8.81122 305.984 9.05831 312.896 8.90982C315.307 8.84774 318.009 9.14352 319.782 7.02439C335.88 6.67993 351.992 7.36886 368.117 5.89119C382.516 4.58515 397.044 5.93988 411.576 4.48656C426.816 2.97116 442.29 5.06594 457.709 3.5128C472.782 2.00958 487.952 4.42448 503.204 3.72216C517.82 3.03202 532.588 4.70808 547.356 4.43665C561.778 4.16522 576.2 5.68062 590.635 6.23565C619.798 7.34492 648.955 8.67571 678.108 10.228C697.547 11.2854 716.988 12.1575 736.445 13.0303L736.601 13.0373C742.129 13.2807 747.7 14.6391 753.128 14.2448C772.44 12.8279 791.6 15.7358 810.968 14.812C826.941 14.0476 843.064 16.0194 859.207 14.4797C870.164 13.4329 881.317 13.4572 892.303 12.7671C898.662 12.3727 904.453 12.3106 910.424 13.9989C913.103 14.8852 915.921 14.9446 918.623 14.1717C925.37 11.7191 931.48 14.4797 937.838 15.182C930.579 15.3037 923.32 14.9848 915.921 15.6871C916.087 19.5444 918.013 21.4663 922.142 21.8729C928.097 22.4604 934.081 22.4811 940.04 21.9349C947.604 21.2691 955.126 20.2309 962.637 19.5943C970.866 18.8798 979.151 21.2083 987.684 21.1766C996.37 21.1401 1005.2 21.128 1013.94 21.5954C1016.16 21.762 1018.38 21.1719 1020.34 19.8913C1024.56 17.1563 1030.55 17.1563 1034.29 18.6218C1038.18 20.1493 1041.67 20.1871 1045.41 20.4208C1051.15 20.7859 1056.87 20.3465 1062.63 21.4554C1068.13 22.5057 1073.77 21.7091 1078.92 19.1512C1078.17 18.4583 1077.28 18.0035 1076.35 17.8272C1075.41 17.651 1074.46 17.7588 1073.56 18.141C1074.66 15.2696 1077.48 16.6864 1079.24 16.8471C1090.95 17.8695 1102.54 15.664 1114.36 16.1168C1123.69 16.4819 1133.54 15.9074 1143.15 15.6299C1147.11 15.5191 1151.59 14.3117 1154.3 18.5134C1154.9 19.4373 1156.24 19.2157 1157.29 18.427C1162.14 14.829 1168.13 14.3482 1173.96 14.4845C1189.82 14.8667 1205.67 14.3117 1221.52 14.1888C1223.88 14.1644 1225.93 13.5972 1226.94 16.4929C1227.52 18.1568 1236.04 18.5512 1237.44 17.3181C1236.69 16.0486 1234.14 17.491 1233.71 14.7925C1259.48 12.8328 1285.26 15.9257 1311.28 12.3155C1310.46 14.9519 1307.97 14.6939 1308.05 16.8495C1317.68 16.7144 1327.29 19.2279 1336.77 17.8355C1347.39 16.2702 1357.89 16.9481 1368.45 17.1818C1374.62 17.3035 1380.68 17.5762 1386.95 17.2305C1416.8 15.5788 1446.7 14.2727 1476.6 13.669C1491.29 13.3854 1505.98 14.1498 1520.75 13.3246C1534.87 12.5236 1549.11 13.7554 1563.33 13.4597C1575.93 13.2004 1588.58 15.098 1601.47 16.0718C1599.63 16.7803 1597.68 16.941 1595.78 16.5404C1575.69 14.6671 1555.52 16.5404 1535.39 15.5423C1523.06 14.9337 1510.52 15.2465 1498.2 15.7516C1488.66 16.1582 1478.3 12.9058 1469.19 18.2895C1468.4 18.7459 1466.94 18.3016 1465.79 18.2773C1454.31 18.0801 1442.85 17.8772 1431.39 17.6687C1430.25 17.4889 1429.09 17.5222 1427.95 17.7673C1418.7 21.5747 1408.56 17.4837 1399.19 20.3794C1397.39 20.7943 1395.52 20.4828 1393.87 19.492C1391.95 18.5355 1389.84 18.3329 1387.82 18.9127C1377.96 21.4383 1368.15 23.7546 1357.87 20.6752C1357.23 20.5862 1356.58 20.7689 1356.04 21.1925C1352.35 24.5069 1347.85 23.1022 1343.68 22.7079C1341.25 22.4858 1338.82 22.4241 1336.38 22.5228C1328.14 22.8065 1320.95 27.5377 1312.53 26.6613C1311.96 26.6126 1311.83 27.1482 1312.98 27.7458C1322.08 27.1299 1331.85 28.2266 1341.74 26.5018C1356.91 23.852 1372.54 26.144 1387.86 23.779C1401.92 21.6221 1416.28 23.0767 1430.5 21.5978C1445.33 20.058 1460.39 20.5254 1475.35 19.6503C1490.45 18.7508 1505.62 20.1189 1520.84 19.1086C1536.83 18.0363 1552.95 19.7988 1569.08 19.2815C1581.88 18.8628 1594.71 20.2431 1607.65 19.9838C1623.63 19.6591 1639.74 20.3293 1655.75 20.9955L1658.67 21.117C1679.15 21.9544 1699.62 22.0043 1720.09 22.4973C1742.17 23.0389 1764.28 22.8551 1786.38 22.8795C1812.7 22.9038 1838.91 21.2777 1865.19 21.0062C1866.99 20.9819 1868.79 20.5011 1870.61 20.2759C1879.88 19.105 1899.66 19.7586 1905.52 27.6569C1906.15 28.5499 1906.94 29.2623 1907.82 29.7437C1908.71 30.225 1909.67 30.4634 1910.64 30.4419C1913.29 30.4284 1912.53 30.5612 1912.15 30.6103C1912.38 30.5859 1912.92 30.5343 1913.97 30.4419C1915.09 30.3645 1916.21 30.3645 1917.33 30.4419C1918.44 30.5193 1919.85 30.448 1919.85 30.448Z"
        //fill="red"
      />
    </svg>
  )
}

export default SectionBrush2
