import Header from './Header';

const layoutStyle = {
    margin: 30,
    padding: 20,
    fontFamily: "'Noto Sans JP', sans-serif",
};

const Layout = (props) => (
    <div style={layoutStyle}>
        <head>
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400&display=swap" rel="stylesheet"></link>
        </head>
        <Header />
        {props.children}
    </div>
);

export default Layout;