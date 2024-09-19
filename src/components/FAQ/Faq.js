import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Faq = () => {
    // State to track the currently open question
    const [activeIndex, setActiveIndex] = useState(null);

    // Function to toggle between open and close
    const toggleFaq = (index) => {
        // If the same index is clicked, close it; otherwise, open the clicked one
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Data for FAQs
    const faqData = [
        {
            question: "What results does Inito give?",
            answer: "Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito also shows you the charts and actual values of all 4 hormones."
        },
        {
            question: "How many test strips are required per cycle?",
            answer: "The number of tests depends on the irregularity and length of your cycles. For someone with an average cycle length of 30 days, 12-15 tests may be required to track and confirm ovulation."
        },
        {
            question: "Where can I get more refill strips? Do I need to buy a new monitor every cycle?",
            answer: "Boxes of strips are available in the ‘shop’ tab in the Inito app. You don’t need to purchase the monitor again."
        },
        {
            question: "Do I need to use a test strip for each hormone?",
            answer: "No. Inito is the only fertility monitor that measures Estrogen, LH, PdG (urine metabolite of progesterone) and FSH on a single test strip."
        },
    ];

    const faqDatas = [
        {
            question: "Will Inito work if I have PCOS?",
            answer: "Every woman is unique, especially with a condition like PCOS, which can influence hormone levels. Inito shows you a full picture of your cycle, which can help you identify your fertile days and confirm ovulation."
        },
        {
            question: "Do medications affect the results?",
            answer: "Fertility medications or other drugs that influence your hormones can prevent Inito from giving you accurate results. You will still be able to see your hormone patterns via the App."
        },
        {
            question: "Can I use HSA benefits to purchase Inito?",
            answer: "Yes!"
        },
        {
            question: "What is Inito's regulatory status in the US?",
            answer: "The Inito Fertility Monitor is registered with the U.S. Food and Drug Administration (FDA) as a Class I medical device that is exempt from FDA's premarket notification submission requirements."
        }
    ];

    return (
        <div className="container">
            <section className="faqs-sec-v2 lp-faq">
                <h1 className="text-dtheme text-center mb-4">
                    Your top<span className="image_as_circled"> questions, </span>answered
                </h1>

                {/* First row with 4 columns */}
                <div className="row">
                    <div className="col-md-6">
                        {faqData.map((faq, index) => (
                            <div key={index} className="mb-3">
                                <div className="" style={{ background: '#F7F7FE' }}>
                                    <div
                                        className="card-header p-4 rounded"
                                        onClick={() => toggleFaq(index)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <h6 className="mb-0 text-dtheme font-semi-bold d-flex justify-content-between align-items-center ">
                                            {faq.question}
                                            <span>
                                                {activeIndex === index ? (
                                                    <i className="fa fa-minus "></i>
                                                ) : (
                                                    <i className="fa fa-plus"></i>
                                                )}
                                            </span>
                                        </h6>
                                    </div>
                                    {/* Only the card content (answer) collapses */}
                                    <div className={`card-body ${activeIndex === index ? '' : 'd-none'}`}>
                                        <p className="text text-dtheme font-med">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second section with 8 columns */}
                    <div className="col-md-6">
                        {faqDatas.map((faq, index) => (
                            <div key={index} className="mb-3">
                                <div className="" style={{ background: '#F7F7FE' }}>
                                    <div
                                        className="card-header p-4 rounded"
                                        onClick={() => toggleFaq(index + faqData.length)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <h6 className="mb-0 text-dtheme font-semi-bold d-flex justify-content-between align-items-center ">
                                            {faq.question}
                                            <span>
                                                {activeIndex === index + faqData.length ? (
                                                    <i className="fa fa-minus "></i>
                                                ) : (
                                                    <i className="fa fa-plus"></i>
                                                )}
                                            </span>
                                        </h6>
                                    </div>
                                    {/* Only the card content (answer) collapses */}
                                    <div className={`card-body ${activeIndex === index + faqData.length ? '' : 'd-none'}`}>
                                        <p className="text text-dtheme font-med">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;
