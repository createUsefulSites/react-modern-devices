import ContentLoader from 'react-content-loader';

const Skeleton = () => (
    <ContentLoader
        style={{ marginBottom: '20px' }}
        speed={2}
        width={280}
        height={450}
        viewBox='0 0 280 450'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
    >
        <rect x='41' y='1' rx='19' ry='19' width='200' height='260' />
        <rect x='0' y='309' rx='10' ry='10' width='280' height='83' />
        <rect x='75' y='270' rx='10' ry='10' width='126' height='24' />
        <rect x='1' y='412' rx='10' ry='10' width='102' height='27' />
        <rect x='127' y='405' rx='10' ry='10' width='153' height='44' />
    </ContentLoader>
);

export default Skeleton;
