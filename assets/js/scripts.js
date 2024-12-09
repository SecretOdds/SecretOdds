document.getElementById('how-does-it-work').addEventListener('click', () => {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: #585858; color: #FFFFFF; z-index: 1000; display: flex;
    flex-direction: column; align-items: center; padding: 2rem; overflow-y: auto;
  `;
  overlay.innerHTML = `
  <div style="max-width: 900px; width: 100%; display: grid; gap: 2rem;">
    <!-- Section 1: Introduction & Features -->
    <div style="background: linear-gradient(145deg, #2e2e2e, #3b3b3b); padding: 2rem; border-radius: 8px; 
                box-shadow: 0 4px 8px rgba(0,0,0,0.2); border: 1px solid #444;">
      <h2 style="text-align: center; color: #FFFFFF; font-weight: bold;">Introduction & Features</h2>
      <p>
        Welcome to our platform! This website provides <strong>football odds data</strong> for opportunities like 
        <strong style="color: #FFFFFF;">arbitrages</strong> and <strong style="color: #FFFFFF;">value bets</strong>. 
        Currently <strong><em style="color: #FFFFFF;">free</em></strong>, it may later require 
        <strong><em style="color: #FFFFFF;">subscriptions</em></strong> for early data access.
      </p>
      <p>
        Future additions may include <strong><em style="color: #FFFFFF;">notifications</em></strong> 
        and <strong><em style="color: #FFFFFF;">user registrations</em></strong>.
      </p>
    </div>

    <!-- Section 2: Disclaimer -->
    <div style="background: linear-gradient(145deg, #2e2e2e, #3b3b3b); padding: 2rem; border-radius: 8px; 
                box-shadow: 0 4px 8px rgba(0,0,0,0.2); border: 1px solid #444;">
      <h2 style="text-align: center; color: #FFFFFF; font-weight: bold;">Disclaimer</h2>
      <ol style="padding-left: 1.5rem; color: #FFFFFF;">
        <li>This website provides comparative analysis, not specific betting advice.</li>
        <li>Ensure the legality of bookmakers in your region.</li>
        <li>Betting involves risks; users should assess these carefully.</li>
      </ol>
    </div>

    <!-- Section 3: Functionality -->
    <div style="background: linear-gradient(145deg, #2e2e2e, #3b3b3b); padding: 2rem; border-radius: 8px; 
                box-shadow: 0 4px 8px rgba(0,0,0,0.2); border: 1px solid #444;">
      <h2 style="text-align: center; color: #FFFFFF; font-weight: bold;">Functionality</h2>
      <ul style="padding-left: 1.5rem; color: #FFFFFF;">
        <li><strong>Current Arbitrages:</strong> Find arbitrage opportunities across bookmakers.</li>
        <li><strong>Current Value Bets:</strong> Discover mispriced odds via machine learning models.</li>
        <li><strong>Past Data:</strong> Review historical value bets and their outcomes.</li>
      </ul>
    </div>

    <!-- Section 4: How the Arbitrage Calculator Works -->
    <div style="background: linear-gradient(145deg, #2e2e2e, #3b3b3b); padding: 2rem; 
                border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); border: 1px solid #444;">
      <h2 style="text-align: center; color: #FFFFFF; font-weight: bold;">How the Arbitrage Calculator Works</h2>
      <p>
        The Arbitrage Calculator helps distribute your total budget across multiple odds for guaranteed profit. 
        You can either input a total budget or individual budgets for each odd.
      </p>
      <p>
        The calculator determines how much to bet on each odd based on their respective probabilities, maximizing your return. 
        ROI (Return on Investment) and total profit are automatically calculated for you.
      </p>
      <p>To use the calculator:</p>
      <ul style="list-style-type: disc; margin-left: 2rem; color: #FFFFFF;">
        <li>Enter either a total budget or individual budgets for each odd.</li>
        <li>Provide at least two odds values to calculate arbitrage opportunities.</li>
        <li>Click "Calculate" to see optimal bets, total stake, and potential profit.</li>
      </ul>
    </div>
  </div>

  <!-- Close Button -->
  <button id="close-overlay" style="
    margin-top: 2rem; padding: 1rem 2rem; background: #1a1a1a; 
    border: 1px solid #444; color: white; border-radius: 5px; cursor: pointer;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);">
    Close
  </button>
`;


  document.body.appendChild(overlay);

  document.getElementById('close-overlay').addEventListener('click', () => {
    overlay.remove();
  });
});




function toggleRows(className) {
  const rowContainers = document.querySelectorAll(`.${className}, #${className}`);
  const button = document.querySelector(`[onclick="toggleRows('${className}')"]`);

  if (rowContainers.length > 0) {
    rowContainers.forEach((container) => {
      if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    });

    // Update the arrow direction
    if (button) {
      if (rowContainers[0].style.display === "block") {
        button.textContent = "▲";
        showMessage();

      } else {
        button.textContent = "▼";
      }
    }
  }
}


function showMessage(message) {
  // Create overlay for the popup
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.8); display: flex; justify-content: center;
    align-items: center; z-index: 10000; padding: 2rem; overflow-y: auto;
  `;

  // Create popup box with max height and overflow handling
  const popup = document.createElement('div');
  popup.style.cssText = `
    background: #2e2e2e; padding: 2rem; border-radius: 8px;
    width: 90%; max-width: 900px; max-height: 80vh; color: #FFFFFF; 
    text-align: left; overflow-y: auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    line-height: 1.5;
  `;

  // Add message content
  popup.innerHTML = `
    <h2 style="text-align: center; margin-top: 2rem; margin-bottom: 1.5rem;">PLEASE READ CAREFULLY</h2>

    <p style="margin-bottom: 1.5rem;">The odds displayed on this website are provided for informational purposes only. 
    Arbitrage betting carries inherent risks, and any combinations or strategies presented here are solely for 
    demonstrating potential market inefficiencies. This website does not recommend or guarantee the success of any 
    betting strategies. Users are encouraged to conduct thorough research before participating in any betting activity.</p>
    
    <p style="margin-bottom: 1.5rem;">The website is not affiliated with the sportsbooks whose odds are displayed. These sportsbooks are selected 
    arbitrarily based on available odds.</p>
   
    <p style="margin-bottom: 1.5rem;">If you are unable to access the website or view the odds due to geographical restrictions, you may consider using 
    VPN or proxy servers. However, it is solely your responsibility to ensure compliance with the laws and regulations 
    of your country, state, or jurisdiction regarding the use of such services. The website provides odds for informational 
    purposes only and urges users to verify the legality of accessing and using these sportsbooks in their region. 
    Users must comply with all applicable laws and regulations.</p>
   
    <h3 style="margin-top: 2rem;">Arbitrage Betting: Risks and Considerations</h3>
    <ul style="margin-bottom: 1.5rem;">
      <li><strong>Odds Fluctuations and Bet Rejection:</strong> You may place a bet on one sportsbook, but before placing the corresponding bet on another, the odds may change, the bet may be rejected, or the event may no longer be available.</li>
      <li><strong>Mitigation Strategy:</strong> Always keep sufficient funds available to cover unexpected changes by either placing alternative bets on other sportsbooks or, if possible, cashing out any placed bets.</li>

      <li><strong>Odds Adjustments During Bet Placement:</strong> Sportsbooks may alter odds during the process of placing a bet, which can affect your intended arbitrage strategy.</li>
      <li><strong>Mitigation Strategy:</strong> Always select the option to "reject odds changes" (or a similar feature) when placing bets. If this feature is unavailable, you should factor in the potential risk of odds changes before proceeding.</li>

      <li><strong>Discrepancies in Event Data Interpretation:</strong> Different sportsbooks may rely on various sources to determine the outcome of an event, leading to potential discrepancies in results.</li>
      <li><strong>Example:</strong> Suppose you bet on both "over" and "under" 24.5 fouls in a game. What constitutes a foul might differ between sportsbooks. Are they using the same data provider? Do they define fouls in the same way? These are critical questions you must consider to minimize risk.</li>
      <li><strong>Mitigation Strategy:</strong> Always verify how different sportsbooks define event outcomes and ensure they use consistent data sources.</li>
    </ul>

    <h3 style="margin-top: 2rem;">Value Betting Disclaimer</h3>
    <p style="margin-bottom: 1.5rem;">The odds labeled as "value bets" on this website are derived from models that suggest they may offer favorable betting opportunities. However, the website assumes no responsibility for the accuracy or profitability of these suggestions. Users must independently verify the data, perform their own analysis, and make informed decisions.</p>
    
    <p style="margin-bottom: 1.5rem;">If a sportsbook is unavailable in your region, you may seek comparable or higher odds for the same event on alternative platforms. Again, it is your responsibility to ensure compliance with local regulations.</p>

    <h3 style="margin-top: 2rem;">Final Notes</h3>
    <p style="margin-bottom: 1.5rem;">Users are strongly advised to always act in accordance with their local laws and regulations, maintain responsible betting practices, and be aware of the potential risks involved in arbitrage and value betting. The website provides information but does not guarantee financial gains or the accuracy of the data presented.</p>
    
    <button id="consent-button" style="
      margin-top: 2rem; padding: 0.5rem 1rem; background: #FF4500;
      color: white; border: none; border-radius: 5px; cursor: pointer;">
      Consent
    </button>
  `;

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  document.getElementById('consent-button').addEventListener('click', () => {
    overlay.remove();
  });
}
