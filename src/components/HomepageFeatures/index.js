import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Kemudahan Administrasi',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Fitur Kemudahan Administrasi pada SIAKAD memungkinkan pengguna untuk mengelola administrasi mereka dengan mudah, seperti mengubah data pribadi, melihat jadwal perkuliahan, melihat tagihan biaya perkuliahan, dan melihat informasi akademik lainnya.
      </>
    ),
  },
  {
    title: 'KRS, Transkrip Nilai dan Kegiatan Perkuliahan',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Fitur KRS dan Transkrip Nilai pada SIAKAD memungkinkan pengguna untuk mengelola rencana studi mereka dengan lebih baik, seperti membuat rencana studi, menambah atau mengurangi mata kuliah, dan melihat nilai dari setiap mata kuliah yang telah diambil selama kuliah, serta melihat transkrip nilai mereka dari setiap semester.
      </>
    ),
  },
  {
    title: 'Jadwal dan Kalender Akademik',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Fitur Pengaturan Jadwal pada SIAKAD memungkinkan pengguna untuk melihat jadwal kuliah mereka dan mengatur jadwal mereka dengan lebih baik, seperti mengetahui waktu, tempat, dan dosen pengajar yang bertanggung jawab atas mata kuliah tersebut, serta mengetahui informasi tentang hari libur nasional atau event nasional lainnya.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
