// Nusantara Vanilla Export - Main JavaScript File

// Initialize EmailJS
(function() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = function() {
        emailjs.init("VvPp2TK7CIDLm5QCt");
    };
    document.head.appendChild(script);
})();

// Global Variables
let currentStep = 1;
let filteredProducts = [];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAnimations();
    initializeProductFilters();
    initializeCharts();
    initializeForms();
    initializeDocumentationChecker();
    initializeContactForm();
    initializeTypedText();
});

// Navigation Management
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animation Initialization
function initializeAnimations() {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Typed Text Animation
function initializeTypedText() {
    const typedElement = document.getElementById('typed-headline');
    if (typedElement) {
        new Typed('#typed-headline', {
            strings: [
                'Premium Indonesian Vanilla Beans for International Buyers'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: false,
            showCursor: true,
            cursorChar: '|'
        });
    }
}

// Product Filters (Products Page)
function initializeProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const moistureRange = document.getElementById('moisture-range');
    const vanillinRange = document.getElementById('vanillin-range');
    const lengthRange = document.getElementById('length-range');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const productCount = document.getElementById('product-count');
    
    // Initialize filtered products
    filteredProducts = Array.from(productCards);
    
    // Filter button handlers
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.dataset.filter;
            const filterValue = this.dataset.value;
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('filter-active'));
            this.classList.add('filter-active');
            
            // Apply filter
            applyFilters();
        });
    });
    
    // Range slider handlers
    if (moistureRange) {
        moistureRange.addEventListener('input', function() {
            document.getElementById('moisture-value').textContent = this.value + '%';
            applyFilters();
        });
    }
    
    if (vanillinRange) {
        vanillinRange.addEventListener('input', function() {
            document.getElementById('vanillin-value').textContent = this.value + '%';
            applyFilters();
        });
    }
    
    if (lengthRange) {
        lengthRange.addEventListener('input', function() {
            document.getElementById('length-value').textContent = this.value + 'cm';
            applyFilters();
        });
    }
    
    // Clear filters
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            clearAllFilters();
        });
    }
}

function applyFilters() {
    const productCards = document.querySelectorAll('.product-card');
    const activeGradeFilter = document.querySelector('.filter-btn.filter-active');
    const moistureValue = document.getElementById('moisture-range')?.value || 40;
    const vanillinValue = document.getElementById('vanillin-range')?.value || 3.5;
    const lengthValue = document.getElementById('length-range')?.value || 25;
    
    let visibleCount = 0;
    
    productCards.forEach(card => {
        const grade = card.dataset.grade;
        const moisture = parseFloat(card.dataset.moisture);
        const vanillin = parseFloat(card.dataset.vanillin);
        const length = parseFloat(card.dataset.length);
        
        let show = true;
        
        // Grade filter
        if (activeGradeFilter && activeGradeFilter.dataset.value !== 'all') {
            if (grade !== activeGradeFilter.dataset.value) {
                show = false;
            }
        }
        
        // Range filters
        if (moisture > parseFloat(moistureValue)) show = false;
        if (vanillin > parseFloat(vanillinValue)) show = false;
        if (length > parseFloat(lengthValue)) show = false;
        
        // Apply visibility
        if (show) {
            card.style.display = 'block';
            visibleCount++;
            
            // Animate in
            anime({
                targets: card,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 300,
                easing: 'easeOutQuad'
            });
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update count
    const productCount = document.getElementById('product-count');
    if (productCount) {
        productCount.textContent = visibleCount;
    }
}

function clearAllFilters() {
    // Reset grade filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('filter-active'));
    filterButtons[0]?.classList.add('filter-active'); // Select "All Grades"
    
    // Reset range sliders
    const moistureRange = document.getElementById('moisture-range');
    const vanillinRange = document.getElementById('vanillin-range');
    const lengthRange = document.getElementById('length-range');
    
    if (moistureRange) {
        moistureRange.value = 40;
        document.getElementById('moisture-value').textContent = '40%';
    }
    
    if (vanillinRange) {
        vanillinRange.value = 3.5;
        document.getElementById('vanillin-value').textContent = '3.5%';
    }
    
    if (lengthRange) {
        lengthRange.value = 25;
        document.getElementById('length-value').textContent = '25cm';
    }
    
    applyFilters();
}

// Charts Initialization
function initializeCharts() {
    initializeProcessChart();
    initializeIncotermsChart();
    initializeLeadtimeChart();
}

function initializeProcessChart() {
    const chartElement = document.getElementById('process-chart');
    if (!chartElement) return;
    
    const chart = echarts.init(chartElement);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Sourcing', 'Curing', 'Drying', 'Testing', 'Packaging', 'Export'],
            axisLabel: {
                color: '#8D6E63'
            }
        },
        yAxis: {
            type: 'value',
            name: 'Days',
            axisLabel: {
                color: '#8D6E63'
            }
        },
        series: [{
            name: 'Processing Time',
            type: 'bar',
            data: [7, 90, 35, 3, 5, 7],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#C9A24D' },
                    { offset: 1, color: '#8D6E63' }
                ])
            }
        }]
    };
    
    chart.setOption(option);
    
    // Resize chart on window resize
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

function initializeIncotermsChart() {
    const chartElement = document.getElementById('incoterms-chart');
    if (!chartElement) return;
    
    const chart = echarts.init(chartElement);
    
    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#8D6E63'
            }
        },
        series: [{
            name: 'Responsibility',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 40, name: 'Seller Responsibility (FOB)' },
                { value: 60, name: 'Buyer Responsibility (FOB)' },
                { value: 80, name: 'Seller Responsibility (CIF)' },
                { value: 20, name: 'Buyer Responsibility (CIF)' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            itemStyle: {
                color: function(params) {
                    const colors = ['#C9A24D', '#8D6E63', '#C9A24D', '#8D6E63'];
                    return colors[params.dataIndex];
                }
            }
        }]
    };
    
    chart.setOption(option);
    
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

function initializeLeadtimeChart() {
    const chartElement = document.getElementById('leadtime-chart');
    if (!chartElement) return;
    
    const chart = echarts.init(chartElement);
    
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Air Freight', 'Sea Freight'],
            textStyle: {
                color: '#8D6E63'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Order Processing', 'Documentation', 'Shipping', 'Customs', 'Delivery'],
            axisLabel: {
                color: '#8D6E63'
            }
        },
        yAxis: {
            type: 'value',
            name: 'Days',
            axisLabel: {
                color: '#8D6E63'
            }
        },
        series: [
            {
                name: 'Air Freight',
                type: 'line',
                data: [3, 2, 5, 2, 1],
                itemStyle: {
                    color: '#C9A24D'
                }
            },
            {
                name: 'Sea Freight',
                type: 'line',
                data: [3, 2, 25, 5, 3],
                itemStyle: {
                    color: '#8D6E63'
                }
            }
        ]
    };
    
    chart.setOption(option);
    
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

// Forms Initialization
function initializeForms() {
    // General form handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
    });
}

function handleFormSubmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Send via EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.send("service_ufj5l5p", "template_9vkv97e", data)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
    } else {
        console.warn('EmailJS not initialized');
    }
    
    // Show success message
    showNotification('Inquiry submitted successfully! We will contact you within 24 hours.', 'success');
    
    // Reset form
    form.reset();
    
    // Reset to first step if multi-step form
    if (form.id === 'inquiry-form') {
        resetContactForm();
    }
}

// Contact Form Management
function initializeContactForm() {
    const contactForm = document.getElementById('inquiry-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitContactForm();
    });
}

function nextStep() {
    if (currentStep < 3) {
        // Validate current step
        if (!validateStep(currentStep)) return;
        
        // Hide current step
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        document.getElementById(`step-${currentStep}-indicator`).classList.remove('active');
        document.getElementById(`step-${currentStep}-indicator`).classList.add('completed');
        
        // Show next step
        currentStep++;
        document.getElementById(`step-${currentStep}`).classList.add('active');
        document.getElementById(`step-${currentStep}-indicator`).classList.add('active');
        
        // Animate step transition
        anime({
            targets: `#step-${currentStep}`,
            opacity: [0, 1],
            translateX: [50, 0],
            duration: 300,
            easing: 'easeOutQuad'
        });
    }
}

function prevStep() {
    if (currentStep > 1) {
        // Hide current step
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        document.getElementById(`step-${currentStep}-indicator`).classList.remove('active');
        
        // Show previous step
        currentStep--;
        document.getElementById(`step-${currentStep}`).classList.add('active');
        document.getElementById(`step-${currentStep}-indicator`).classList.add('active');
        document.getElementById(`step-${currentStep}-indicator`).classList.remove('completed');
        
        // Animate step transition
        anime({
            targets: `#step-${currentStep}`,
            opacity: [0, 1],
            translateX: [-50, 0],
            duration: 300,
            easing: 'easeOutQuad'
        });
    }
}

function validateStep(step) {
    const stepElement = document.getElementById(`step-${step}`);
    const requiredFields = stepElement.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('border-red-500');
            isValid = false;
        } else {
            field.classList.remove('border-red-500');
        }
    });
    
    if (!isValid) {
        showNotification('Please fill in all required fields.', 'error');
    }
    
    return isValid;
}

function submitContactForm() {
    if (!validateStep(3)) return;
    
    const formData = new FormData(document.getElementById('inquiry-form'));
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    showNotification('Inquiry submitted successfully! We will contact you within 24 hours.', 'success');
    
    // Reset form
    resetContactForm();
}

function resetContactForm() {
    currentStep = 1;
    
    // Hide all steps
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`step-${i}`).classList.remove('active');
        document.getElementById(`step-${i}-indicator`).classList.remove('active', 'completed');
    }
    
    // Show first step
    document.getElementById('step-1').classList.add('active');
    document.getElementById('step-1-indicator').classList.add('active');
    
    // Reset form
    document.getElementById('inquiry-form').reset();
}

// Documentation Checker (Export & Logistics Page)
function initializeDocumentationChecker() {
    const checkButton = document.getElementById('check-requirements');
    const destinationSelect = document.getElementById('destination-country');
    const businessTypeSelect = document.getElementById('business-type');
    
    if (checkButton) {
        checkButton.addEventListener('click', function() {
            checkDocumentationRequirements();
        });
    }
}

function checkDocumentationRequirements() {
    const destination = document.getElementById('destination-country').value;
    const businessType = document.getElementById('business-type').value;
    const resultDiv = document.getElementById('requirements-result');
    const requirementsList = document.getElementById('requirements-list');
    const requirementsNotes = document.getElementById('requirements-notes');
    
    if (!destination || !businessType) {
        showNotification('Please select both destination country and business type.', 'error');
        return;
    }
    
    // Define requirements based on destination and business type
    const requirements = getRequirements(destination, businessType);
    
    // Display requirements
    requirementsList.innerHTML = '';
    requirements.documents.forEach(doc => {
        const div = document.createElement('div');
        div.className = 'flex items-center space-x-3 p-3 bg-vanilla-bg rounded-lg';
        div.innerHTML = `
            <svg class="w-5 h-5 text-vanilla-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="text-vanilla-text">${doc}</span>
        `;
        requirementsList.appendChild(div);
    });
    
    requirementsNotes.textContent = requirements.notes;
    
    // Show result with animation
    resultDiv.classList.remove('hidden');
    anime({
        targets: resultDiv,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 300,
        easing: 'easeOutQuad'
    });
}

function getRequirements(destination, businessType) {
    const requirements = {
        us: {
            importer: {
                documents: [
                    'Commercial Invoice',
                    'Packing List',
                    'Bill of Lading/Air Waybill',
                    'Certificate of Origin',
                    'Phytosanitary Certificate',
                    'FDA Registration',
                    'Prior Notice (FDA)'
                ],
                notes: 'FDA registration is required for food products. We can assist with the registration process if needed.'
            },
            manufacturer: {
                documents: [
                    'Commercial Invoice',
                    'Packing List',
                    'Bill of Lading/Air Waybill',
                    'Certificate of Origin',
                    'Phytosanitary Certificate',
                    'FDA Registration',
                    'Food Facility Registration'
                ],
                notes: 'Additional documentation may be required based on your specific manufacturing processes and end products.'
            }
        },
        eu: {
            importer: {
                documents: [
                    'Commercial Invoice',
                    'Packing List',
                    'Bill of Lading/Air Waybill',
                    'Certificate of Origin',
                    'Phytosanitary Certificate',
                    'EU Health Certificate',
                    'Customs Declaration'
                ],
                notes: 'EU regulations require comprehensive traceability and food safety documentation. All documents must be in English or translated to the destination country language.'
            }
        },
        cn: {
            importer: {
                documents: [
                    'Commercial Invoice',
                    'Packing List',
                    'Bill of Lading/Air Waybill',
                    'Certificate of Origin',
                    'Phytosanitary Certificate',
                    'GACC Registration',
                    'Import License'
                ],
                notes: 'China requires GACC (General Administration of Customs) registration for food importers. Process can take 2-4 weeks.'
            }
        }
    };
    
    // Default requirements for other destinations
    const defaultRequirements = {
        documents: [
            'Commercial Invoice',
            'Packing List',
            'Bill of Lading/Air Waybill',
            'Certificate of Origin',
            'Phytosanitary Certificate'
        ],
        notes: 'Additional requirements may apply based on destination country regulations. We will verify specific requirements during order processing.'
    };
    
    return requirements[destination]?.[businessType] || defaultRequirements;
}

// Modal Functions
function openInquiryModal(productType) {
    const modal = document.getElementById('inquiry-modal');
    const productTypeInput = document.getElementById('product-type');
    
    if (modal && productTypeInput) {
        productTypeInput.value = productType;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Animate modal
        anime({
            targets: modal.querySelector('.bg-white'),
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutBack'
        });
    }
}

function closeInquiryModal() {
    const modal = document.getElementById('inquiry-modal');
    if (modal) {
        anime({
            targets: modal.querySelector('.bg-white'),
            scale: [1, 0.8],
            opacity: [1, 0],
            duration: 200,
            easing: 'easeInQuad',
            complete: function() {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
    }
}

// Quick Actions
function quickAction(action) {
    const actions = {
        samples: 'Sample request submitted. We will contact you within 24 hours to arrange sample shipment.',
        catalog: 'Product catalog will be sent to your email address within 2 hours.',
        pricing: 'Pricing information request submitted. Our sales team will contact you shortly.',
        consultation: 'Consultation request submitted. We will schedule a call at your convenience.'
    };
    
    showNotification(actions[action] || 'Request submitted successfully!', 'success');
}

// Utility Functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-vanilla-accent text-vanilla-text'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });
    
    // Remove after 5 seconds
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 200,
            easing: 'easeInQuad',
            complete: function() {
                document.body.removeChild(notification);
            }
        });
    }, 5000);
}

// Product Specification Viewers
function viewSpecifications(productType) {
    const specs = {
        'grade-a': {
            title: 'Grade A Vanilla Beans - Detailed Specifications',
            content: `
                <h4>Technical Specifications</h4>
                <ul>
                    <li><strong>Origin:</strong> Indonesia (Java, Bali, Sulawesi, Papua)</li>
                    <li><strong>Grade:</strong> Gourmet/Prime Grade A</li>
                    <li><strong>Moisture Content:</strong> 25% - 35%</li>
                    <li><strong>Vanillin Content:</strong> 1.8% - 2.5%</li>
                    <li><strong>Length:</strong> 15 cm and above</li>
                    <li><strong>Appearance:</strong> Plump, oily, flexible</li>
                    <li><strong>Color:</strong> Dark brown to black</li>
                    <li><strong>Processing:</strong> Sun-dried and conditioned</li>
                    <li><strong>Shelf Life:</strong> 24 months</li>
                    <li><strong>Packaging:</strong> Vacuum-sealed, export-grade cartons</li>
                </ul>
            `
        },
        'grade-b': {
            title: 'Grade B Vanilla Beans - Detailed Specifications',
            content: `
                <h4>Technical Specifications</h4>
                <ul>
                    <li><strong>Origin:</strong> Indonesia (Java, Bali, Sulawesi, Papua)</li>
                    <li><strong>Grade:</strong> Extraction/Industrial Grade B</li>
                    <li><strong>Moisture Content:</strong> 15% - 25%</li>
                    <li><strong>Vanillin Content:</strong> 1.2% - 1.8%</li>
                    <li><strong>Length:</strong> 10 cm - 15 cm</li>
                    <li><strong>Appearance:</strong> Drier, may have some blemishes</li>
                    <li><strong>Color:</strong> Reddish-brown to black</li>
                    <li><strong>Processing:</strong> Sun-dried and processed</li>
                    <li><strong>Shelf Life:</strong> 24 months</li>
                    <li><strong>Packaging:</strong> Vacuum-sealed, export-grade cartons</li>
                </ul>
            `
        }
    };
    
    const spec = specs[productType];
    if (spec) {
        showNotification(`${spec.title} - Contact us for complete technical documentation.`, 'info');
    }
}

// Schedule Visit
function scheduleVisit() {
    showNotification('Visit request submitted. We will contact you to schedule a convenient time for your visit.', 'success');
}

// Initialize Splide carousels if present
document.addEventListener('DOMContentLoaded', function() {
    const splideElements = document.querySelectorAll('.splide');
    splideElements.forEach(element => {
        new Splide(element, {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1rem',
            breakpoints: {
                768: {
                    perPage: 1,
                },
                1024: {
                    perPage: 2,
                }
            }
        }).mount();
    });
});

// Export functions for global access
window.openInquiryModal = openInquiryModal;
window.closeInquiryModal = closeInquiryModal;
window.viewSpecifications = viewSpecifications;
window.nextStep = nextStep;
window.prevStep = prevStep;
window.quickAction = quickAction;
window.scheduleVisit = scheduleVisit;