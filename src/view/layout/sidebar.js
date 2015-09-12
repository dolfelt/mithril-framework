export default function() {
    var links = [
        {
            icon: "fa-sign-in",
            title: "Login",
            url: "/login"
        },
        {
            icon: "fa-dashboard",
            title: "Dashboard",
            url: "/"
        },
        {
            icon: "fa-list",
            title: "List",
            url: "/list"
        }
    ];

    return m(".sidebar", [
        m("ul.nav",
            links.map(function(link) {
                return m("li.nav__item", [
                    m("a.nav__link", {href: link.url, config: m.route}, [
                        m("i.nav__icon", {class: "fa " + link.icon}), " ", [
                            m("span", link.title)
                        ]
                    ])
                ]);
            })
        )
    ]);
}
