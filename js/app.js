/** jQuery Initialisation **/
(function($){
  $(function(){

	$('.button-collapse').sideNav({'edge': 'left'});

	$('.collapsible').collapsible({
	  accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	});
  
  }); // end of document ready
})(jQuery); // end of jQuery name space

/** React App **/
var AppHeader = React.createClass({
  render: function() {
	return (
		<header>
			<a href="#" data-activates="slide-out" className="button-collapse top-nav full hide-on-large-only"><i className="material-icons">menu</i></a>
			<ul id="slide-out" className="side-nav fixed">
			  <li className="bold"><a href="#first">First Sidebar Link</a></li>
			  <li className="bold"><a href="#second">Second Sidebar Link</a></li>
			  <li className="no-padding">
				  <ul className="collapsible collapsible-accordion" data-collapsible="accordion">
					  <li>
					      <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
					      <div className="collapsible-body">
					      		<ul>
									<li>
										<a href="#">Navbar</a>
									</li>
									<li>
										<a href="#">Navbar</a>
									</li>
								  </ul>
					      </div>
					    </li>
					    <li>
					      <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
					      <div className="collapsible-body">
					      		<ul>
									<li>
										<a href="#">Navbar</a>
									</li>
									<li>
										<a href="#">Navbar</a>
									</li>
								  </ul>
					      </div>
					  </li>
				  </ul>
				</li>
			</ul>
		</header>
		)
  }
});

var AppMain = React.createClass({
  render: function() {
	return (
		<main></main>
		)
  }
});

var AppFooter = React.createClass({
  render: function() {
	return (
		<footer></footer>
		)
  }
});

var App = React.createClass({
  render: function() {
	return (
		<div>
			<AppHeader />
			<AppMain />
			<AppFooter />
		</div>
		)
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);