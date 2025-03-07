import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("web-component-widget")
export class WebComponentWidget extends LitElement {
    @property({ type: Array }) announcements = [
        {
            text: "Please verify your ID for Tax Information by 30th May",
            sender: "Adam Evanson",
        },
        { text: "R&D Expo is in 2 weeks!", sender: "Janine Bookk" },
        { text: "R&D Expo is in 2 weeks!", sender: "Janine Bookk" },
        {
            text: "Please verify your ID for Tax Information by 30th May",
            sender: "Adam Evanson",
        },
        { text: "R&D Expo is in 2 weeks!", sender: "Janine Bookk" },
    ];

    @property({ type: Array }) events = [
        {
            name: "Tim Cook",
            event: "Birthday",
            date: "Apr. 1st",
            color: "#b52950",
            icon: "🎂",
            image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Aiden&radius=50&backgroundColor=b6e3f4,c0aede,ffdfbf",
        },
        {
            name: "Lucas Robinson",
            event: "New Joiner",
            date: "Apr. 1st",
            color: "#409163",
            icon: "👋",
            image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Luis&radius=50&backgroundColor=b6e3f4,c0aede,ffdfbf",
        },
        {
            name: "Tim Cook",
            event: "Birthday",
            date: "Apr. 1st",
            color: "#b52950",
            icon: "🎂",
            image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Aiden&radius=50&backgroundColor=b6e3f4,c0aede,ffdfbf",
        },
        {
            name: "Ava Davis",
            event: "Work Anniversary",
            date: "Apr. 1st",
            color: "#2f4b7f",
            icon: "🎉",
            image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Nolan&radius=50&backgroundColor=b6e3f4,c0aede,ffdfbf",
        },
        {
            name: "Lucas Robinson",
            event: "New Joiner",
            date: "Apr. 1st",
            color: "#409163",
            icon: "👋",
            image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Luis&radius=50&backgroundColor=b6e3f4,c0aede,ffdfbf",
        },
    ];

    static styles = css`
        :host {
            container-type: inline-size;
            container-name: hub-container;
            font-family: Arial, sans-serif;
        }

        .hub {
            display: grid;
            grid-template-columns: repeat(2, minmax(300px, 1fr));
            gap: 16px;
        }

        .section-title {
            font-size: 12px;
            line-height: 1;
            text-align: left;
            color: #1a1b1d;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .scrollable {
            flex-grow: 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
            border-radius: 4px;
            overflow-y: auto;
            max-height: 260px;
            padding-inline-end: 4px;
        }

        .scrollable::-webkit-scrollbar {
            width: 0.25rem;
            height: 0.25rem;
            border-radius: 0.125rem;
        }

        .scrollable::-webkit-scrollbar-thumb {
            background: #8c8c8c;
            border-radius: 0.125rem;
        }

        .scrollable::-webkit-scrollbar-track {
            background: #f4f2f4;
        }

        /* Announcements */
        .announcement-section {
            background-color: #f9f9f9;
            padding: 16px;
            border-radius: 8px;
        }

        .announcement-item {
            flex-grow: 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 8px;
            padding: 8px;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .announcement-item:hover {
            background: #e8e8e8;
        }

        .icon-container {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .announcement-icon {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #d4eafa;
        }

        .announcement-info {
            display: flex;
            flex-direction: column;
            width: 80%;
        }

        .announcement-title {
            font-size: 12px;
            line-height: 1.5;
            color: #1a1b1d;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .announcement-link {
            font-size: 12px;
            color: #0173d1;
            text-decoration: none;
            line-height: 1;
        }

        .announcement-link:hover {
            text-decoration: underline;
        }

        /* Events */
        .event-item {
            flex-grow: 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 8px;
            padding: 8px;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .event-item:hover {
            background: #e8e8e8;
        }

        .event-image {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }

        .event-badge {
            font-size: 12px;
            padding: 4px 8px;
            border-radius: 12px;
            color: white;
            margin-right: 10px;
            white-space: nowrap;
        }

        .event-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex: 1;
        }

        .event-details {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .event-name {
            font-size: 12px;
            line-height: 1;
            color: #1a1b1d;
        }

        .event-badge-container {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .event-date {
            font-size: 12px;
            line-height: 1;
            color: #3e484d;
        }

        .button {
            background: none;
            border: 1px solid #ccc;
            padding: 6px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
        }

        .button:hover {
            background: #e1e1e1;
        }

        .event-section {
            container-type: inline-size;
            container-name: event-container;
            background-color: #f9f9f9;
            padding: 16px;
            border-radius: 8px;
        }

        /* Container Queries */
        @container hub-container (max-width: 650px) {
            .event-item {
                flex-direction: row;
                justify-content: space-between;
            }

            .button {
                font-size: 10px;
                padding: 4px 8px;
            }
        }

        @container hub-container (min-width: 651px) {
            .announcement-section {
                flex: 1;
                padding: 16px 8px 16px 16px;
                border-radius: 8px;
                
            }

            .event-section {
                flex: 1;
                padding: 16px 8px 16px 16px;
                border-radius: 8px;
            }
        }

        @container event-container (width <= 340px) {
            .event-badge-container {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    `;

    render() {
        return html`
            <div class="hub">
                <!-- Announcements -->
                <div class="announcement-section">
                    <div class="section-title">📢 Announcements</div>
                    <div class="scrollable">
                        ${this.announcements.map(
                            (a) => html`
                                <div class="announcement-item" @click="${{ handleEvent: () => this.onSelectAnnouncement(a) }}">
                                    <div class="icon-container">
                                        <div class="announcement-icon">🗓️</div>
                                    </div>
                                    <div class="announcement-info">
                                        <div class="announcement-title"
                                            >${a.text} - Sent by
                                            ${a.sender}</span
                                        >
                                        <div>
                                            <a href="#" class="announcement-link">
                                                See More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            `
                        )}
                    </div>
                </div>

                <!-- Events -->
                <div class="event-section">
                    <div class="section-title">🎉 Events</div>
                    <div class="scrollable">
                        ${this.events.map(
                            (e) => html`
                                <div class="event-item" @click="${{handleEvent: () => this.onSelectEvent(e)}}">
                                    <img
                                        src="${e.image}"
                                        alt="${e.name}"
                                        class="event-image"
                                    />
                                    <div class="event-info">
                                        <div class="event-details">
                                            <div class="event-name">${
                                                e.name
                                            }</div>
                                            <div class="event-badge-container">
                                                <div
                                                    class="event-badge"
                                                    style="background: ${
                                                        e.color
                                                    };"
                                                    >${e.event}</span>
                                                </div>
                                                <div class="event-date">
                                                    ${e.date}
                                                </div>
                                            </div>
                                        </div>
                                        <button class="button">
                                            ${e.icon}&nbsp;
                                            ${
                                                e.event === "New Joiner"
                                                    ? "Say Hello"
                                                    : "Wish"
                                            }
                                        </button>
                                    </div>`
                                )}
                            </div>
                        </div>
                    </div>`;
    }

    private onSelectAnnouncement(announcement: any) {
        if (announcement) {
            const options = {
                detail: announcement,
                bubbles: true,
                composed: true
            };

            this.dispatchEvent(new CustomEvent('onSelectAnnouncement', options));
        }
    }

    private onSelectEvent(event: any) {
        if (event) {
            const options = {
                detail: event,
                bubbles: true,
                composed: true
            };

            this.dispatchEvent(new CustomEvent('onSelectEvent', options));
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "web-component-widget": WebComponentWidget;
    }
}
