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

var ContentWrapper = React.createClass({
    render: function () {
        return (
            <h1>Hello!</h1>,
            <AccordionDefault data={data} />
        );
    }
});








ReactDOM.render(<ContentWrapper />,
    document.getElementById('content-wrapper'));

