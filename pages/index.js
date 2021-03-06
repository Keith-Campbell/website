import Link from 'next/link';
import Layout from '../components/Layout';
import Head from 'next/head';

export default () => {
	return (
		<Layout>
			<Head>
				<title>Atsushi Hori's website | Top</title>
				<meta name="keywords" content="A24H,mathematical optimization,operations research,optmath,Atsushi Hori" />
			</Head>
			<h3>About me:</h3>
			<ul>
				<li><b>氏名</b>: 堀 篤史</li>
				<li><b>所属</b>: 京都大学大学院（情報学研究科数理工学専攻）博士後期課程在籍中</li>
				<li><b>研究対象</b>: 連続最適化の理論（特に変分不等式問題をはじめとするクラスの均衡問題に興味），組み合わせ最適化の実社会への応用（スケジューリングやロット最適化など）</li>
				<li><b>研究成果</b>:
					<ol>
						<li><u>Hori, A.</u>, Fukushima, M., Gauss–Seidel method for multi-leader–follower games. <i>Journal of Optimization Theory and Applications</i> <b>180</b>, 651–670 (2019). <a href="https://doi.org/10.1007/s10957-018-1391-5">https://doi.org/10.1007/s10957-018-1391-5</a></li>
					</ol>
				</li>
				<li><b>研究発表</b>:
					<ol>
						<li><u>堀篤史</u>，山川雄也，山下信雄，確率変分不等式問題に対する分布的ロバスト期待残差最小化，<a href='https://www.orsj.or.jp/nc/2021s/'>日本OR学会2021年春季研究発表会</a>，東京工業大学（オンライン），2021年3月．</li>
						<li><u>堀篤史</u>，福島雅夫，マルチリーダー・フォロワーゲームに対するGauss–Seidel法，<a href='http://www.orsj.or.jp/~nc2018s/'>日本OR学会2018年春季研究発表会</a>，東海大学，2018年3月．</li>
						<li><u>堀篤史</u>，福島雅夫，マルチリーダー・フォロワーゲームに対するGauss–Seidel型ペナルティ法，<a href='https://www.orsj.or.jp/~nc2017s/'>日本OR学会2017年春季研究発表会</a>，沖縄県市町村自治会館，2017年3月．</li>
						<li><u>堀篤史</u>，福島雅夫，マルチリーダー・フォロワーゲームに対するGauss–Seidel型ペナルティ法，<a href='http://www.orsj.or.jp/chubu/?p=2708'>第44回日本OR学会中部支部研究発表会</a>，ウインクあいち愛知県立大学サテライトキャンパス，2017年3月．（<b>学生論文賞優秀賞受賞</b>）</li>
						<li><u>Hori, A.</u>, Fukushima, M., Gauss–Seidel method for multi-leader–follower games. <i>The Fifth International Conference on Continuous Optimization (ICCOPT 2016)</i>, National Graduate Institute for Policy Studies, Tokyo, Japan, August, 2016. (poster)</li>
					</ol>
				</li>
				<li><b>表彰歴</b>:
					<ol>
						<li><a href='http://www.orsj.or.jp/whatisor/award6.html'>2018年度日本オペレーションズ・リサーチ学会学生論文賞 受賞</a></li>
					</ol>
				</li>
			</ul>
		  </Layout>
	);
};
