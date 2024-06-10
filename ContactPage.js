import React from 'react';


function ContactPage() {
  return (
    <div>
      <header>
        <img src="android-chrome-192x192.png" alt="Favicon logo of Andy Vo" id="favicon-header" />
        <h1>Andy Vo</h1>
      </header>
      <nav id="global">
        <a href="index.html">Home</a>
        <a href="contact.html">Contact</a>
        <a href="gallery.html">Gallery</a>
        <a href="order.html">Order</a>
      </nav>
      <main>
        <section>
          <h2>Contact</h2>
          <p>This is a Node app using JavaScript, HTML, and CSS. This form is used to contact me for opportunities, tips, or suggestions to improve! Filling this out will allow you to reach me.</p>
          <article className="contact">
            <p><strong>* Fields are required</strong></p>
            <form action="/answers" method="POST">
              <fieldset>
                <legend>Please introduce yourself...</legend>
                <label htmlFor="firstlast" className="required">First and Last Name</label>
                <input
                  type="text"
                  name="firstlast"
                  id="firstlast"
                  size="30"
                  maxLength="100"
                  placeholder="First and last name"
                  autoFocus
                />

                <label htmlFor="email" className="required">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  size="30"
                  maxLength="100"
                  required
                  pattern="[^ @]+@[^@]+.[a-z]"
                  placeholder="email@email.com"
                />
              </fieldset>
              <fieldset>
                <legend>Optional Survey</legend>
                <label htmlFor="company" className="required">What company are you from?</label>
                <select name="corporation" id="company">
                  <option value="Meta">Meta</option>
                  <option value="Apple">Apple</option>
                  <option value="Amazon">Amazon</option>
                  <option value="Netflix">Netflix</option>
                  <option value="Google">Google</option>
                  <option value="Fortune-500">Fortune 500</option>
                  <option value="Other" selected>Other</option>
                </select>
                <p>Would you be willing to refer me?</p>
                <label htmlFor="yes">
                  <input type="radio" name="refer" id="yes" value="yes referral" /> Yes, I would refer you.
                </label>
                <label htmlFor="no">
                  <input type="radio" name="refer" id="no" value="no referral" /> No, I would not refer you.
                </label>
                <label htmlFor="maybe">
                  <input type="radio" name="refer" id="maybe" value="maybe referral" /> Maybe, I would refer you.
                </label>
                <p>If you are not willing to refer me or you are a maybe, why?</p>
                <label htmlFor="gpa">
                  <input type="checkbox" name="criticism" id="gpa" value="low gpa" /> GPA too low.
                </label>
                <label htmlFor="projects">
                  <input type="checkbox" name="criticism" id="projects" value="need better projects" /> Projects are not impressive.
                </label>
                <label htmlFor="experience">
                  <input type="checkbox" name="criticism" id="experience" value="need more experience" /> You need more experience in the field.
                </label>
                <label htmlFor="resume">
                  <input type="checkbox" name="criticism" id="resume" value="work more on resume" /> Your resume needs more work.
                </label>
                <p>
                  <label htmlFor="review" className="required">What would you suggest on how I may improve as a candidate?</label>
                  <input type="text" name="review" id="review" placeholder="Please explain my major weaknesses and how I may improve." required />
                </p>
                <label htmlFor="submit">
                  <button type="submit" id="submit" name="answers">Submit survey</button>
                </label>
              </fieldset>
            </form>
          </article>
        </section>
      </main>
      <footer>
        <p><cite>&copy; 2024 Andy Vo. All rights reserved.</cite></p>
      </footer>
    </div>
  );
}

export default ContactPage;
