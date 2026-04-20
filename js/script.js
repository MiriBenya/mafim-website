// Recipe multiplier functionality
let multipliers = [1, 1, 1]; // One multiplier for each recipe

function setMultiplier(button, factor) {
    // Find the recipe container
    const recipe = button.closest('.recipe');
    const recipeIndex = Array.from(document.querySelectorAll('.recipe')).indexOf(recipe);
    
    // Update multiplier
    multipliers[recipeIndex] = factor;
    
    // Update the display
    const display = recipe.querySelector('.mult-display');
    if (multipliers[recipeIndex] === 0.5) {
        display.textContent = '÷2';
    } else if (multipliers[recipeIndex] === 1) {
        display.textContent = 'x1';
    } else if (multipliers[recipeIndex] === 2) {
        display.textContent = '×2';
    }
    
    // Update all amounts in this recipe
    const amounts = recipe.querySelectorAll('.amount');
    amounts.forEach((amountSpan, index) => {
        const originalAmount = parseFloat(amountSpan.dataset.original || amountSpan.textContent);
        
        // Store original value if not stored
        if (!amountSpan.dataset.original) {
            amountSpan.dataset.original = originalAmount;
        }
        
        // Calculate new amount
        const newAmount = originalAmount * multipliers[recipeIndex];
        
        // Format the display (show decimals only when needed)
        if (newAmount % 1 === 0) {
            amountSpan.textContent = Math.round(newAmount);
        } else {
            amountSpan.textContent = newAmount.toFixed(1);
        }
    });
    
    // Visual feedback
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('עמוד מאפים טוען...');
    
    // Store original amounts
    const amounts = document.querySelectorAll('.amount');
    amounts.forEach(amountSpan => {
        if (!amountSpan.dataset.original) {
            amountSpan.dataset.original = parseFloat(amountSpan.textContent);
        }
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
