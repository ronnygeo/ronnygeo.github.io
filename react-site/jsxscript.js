/**
 * Created by ronnygeo on 4/29/16.
 */
var data = [
    {title: "Accordion 1", content: "I would start in the open state, due to using the `is-active` state class."},
    {title: "Accordion 2", content: "React is kinda awesome!"},
    {title: "Accordion 3", content: "It is fun!"},
]

var AccordionItem = React.createClass({
    render: function () {
        return (
            <li className="accordion-item" data-accordion-item="">
                <a href="#" className="accordion-title">{this.props.title}</a>
                <div className="accordion-content" data-tab-content="">
                    {this.props.children}
                </div>
            </li>
        );
    }
});

var AccordionDefault = React.createClass({
    render: function () {
        var AccordionItems = this.props.data.map(function (item) {
            return (
                <AccordionItem title={item.title}>{item.content}</AccordionItem>
            );
        });

        return (
            <ul className="accordion" data-accordion>
                {AccordionItems}
            </ul>
        );
    }
});

var IntroText = React.createClass({
    render: function () {
        return (
            <div id="intro-text">
                <img src="../images/me.jpg" id="intro-img" width="150px"/>
                <h1>RONNY MATHEW</h1>
                <h2>I WORK ON <span id="role"></span></h2>
            </div>
        );
    }
});

var AboutMe = React.createClass({
    render: function () {
        return (
            <div className="align-bottom" id="about-me">
                <h1>About Me</h1>
                <p className="text-justify">I'm a Software Engineer currently honing my skills at Northeastern University, Boston.
                    <br />Key Areas of Expertise: Data Analytics and Management (SQL & NoSQL), Full Stack Web Development (MEAN & Rails) and Software Engineering (Python, C++).</p>
            </div>
        );
    }
});

var IntroPage = React.createClass({
    render: function () {
        return (
            <div id="intro" className="page">
                Introduction
                {                // <IntroText />
                }{// <AboutMe />
            }
            </div>
        );
    }
});

var Page = React.createClass({render: function () {
    return (
        <div className="page">Page1</div>
    );
}
});

var ContentWrapper = React.createClass({
    render: function () {
        return (
            <div>
                <IntroPage />
                <Page />
                <Page />
                <Page />
            </div>
            // <AccordionDefault data={data} />
        );
    }
});

ReactDOM.render(<ContentWrapper />,
    document.getElementById('content-wrapper'));

