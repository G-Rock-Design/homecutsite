// Adiciona classe JS para enable animations
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Icones
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Scroll Reveal usando IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('bg-background/95', 'shadow-lg');
            navbar.classList.remove('bg-background/80');
        } else {
            navbar.classList.add('bg-background/80');
            navbar.classList.remove('bg-background/95', 'shadow-lg');
        }
    });

    // Mobile Menu Toggle
    const btnMenu = document.getElementById('btn-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    if (btnMenu && mobileMenu) {
        btnMenu.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if(isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            }
        });
        
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });
    }

    // Modal de Agendamento Global
    const modalAgendamento = document.getElementById('modal-agendamento');
    const btnOpenModals = document.querySelectorAll('.open-agendamento');
    const btnCloseModal = document.getElementById('close-modal');
    let lastFocusedElement = null;

    const openModal = () => {
        lastFocusedElement = document.activeElement;
        modalAgendamento.classList.remove('hidden');
        modalAgendamento.classList.add('flex');
        document.body.style.overflow = 'hidden';
        
        // Animate in
        setTimeout(() => {
            const content = modalAgendamento.querySelector('.modal-content');
            content.classList.remove('scale-95', 'opacity-0');
            content.classList.add('scale-100', 'opacity-100');
            btnCloseModal.focus();
        }, 10);
    };

    const closeModal = () => {
        const content = modalAgendamento.querySelector('.modal-content');
        content.classList.remove('scale-100', 'opacity-100');
        content.classList.add('scale-95', 'opacity-0');
        
        setTimeout(() => {
            modalAgendamento.classList.add('hidden');
            modalAgendamento.classList.remove('flex');
            document.body.style.overflow = '';
            if (lastFocusedElement) lastFocusedElement.focus();
        }, 200);
    };

    btnOpenModals.forEach(btn => btn.addEventListener('click', openModal));
    if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
    
    if (modalAgendamento) {
        modalAgendamento.addEventListener('click', (e) => {
            if(e.target === modalAgendamento) closeModal();
        });
    }

    // Fechar com Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalAgendamento && !modalAgendamento.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Renderizar Conteúdo das Unidades
    const renderUnidade = (unidadeId) => {
        const unidade = HomeCutData.unidades.find(u => u.id === unidadeId);
        if(!unidade) return;

        const contentContainer = document.getElementById('unidade-content');
        if (!contentContainer) return;
        
        let servicosHtml = '';
        const catalogo = HomeCutData.servicos[unidadeId];
        
        if (catalogo && catalogo.length > 0) {
            catalogo.forEach((cat, index) => {
                servicosHtml += `
                    <details class="group bg-[#1a1a1a] border border-white/5 rounded-xl mb-3 overflow-hidden transition-colors hover:border-[#D6AD45]/20" ${index === 0 ? 'open' : ''}>
                        <summary class="flex justify-between items-center font-montserrat font-bold text-xs tracking-widest uppercase p-5 cursor-pointer text-textWhite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                            ${cat.categoria}
                            <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-300 group-open:rotate-180 text-primary"></i>
                        </summary>
                        <div class="p-5 pt-0 text-[#B9B9B9] text-sm">
                            <ul class="space-y-3 columns-1 md:columns-2 gap-6">
                                ${cat.itens.map(item => `
                                    <li class="flex items-start gap-2 break-inside-avoid mb-2">
                                        <div class="w-1.5 h-1.5 rounded-full bg-[#D6AD45]/60 mt-1.5 shrink-0"></div>
                                        <span class="leading-relaxed">${item}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </details>
                `;
            });
        } else {
            servicosHtml = `
                <div class="card-surface p-8 text-center border border-white/5">
                    <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                        <i data-lucide="info" class="w-6 h-6 text-textMuted"></i>
                    </div>
                    <p class="text-textMuted text-sm mb-6">O catálogo detalhado de serviços desta unidade está sendo atualizado.</p>
                    <a href="${unidade.linkAgendamento}" target="_blank" rel="noopener" class="btn-secondary">Consultar serviços e agendar</a>
                </div>
            `;
        }

        let equipeHtml = '';
        if (unidade.equipe && unidade.equipe.length > 0) {
            const numCards = unidade.equipe.length;
            // Define colunas dinamicamente baseado na quantidade
            let colsClass = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
            if (numCards === 3) colsClass = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
            else if (numCards === 2) colsClass = 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto';
            
            const cards = unidade.equipe.map(membro => {
                if (membro.foto) {
                    return `
                        <div class="card-surface p-1.5 border border-primary/20 group overflow-hidden">
                            <div class="aspect-[4/5] overflow-hidden rounded-[0.5rem] bg-[#1a1a1a] relative">
                                <img src="${membro.foto}" alt="${membro.nome}" class="w-full h-full object-cover ${membro.pos} transition-transform duration-500 group-hover:scale-105" loading="lazy">
                                <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
                            </div>
                            <div class="p-4 text-center">
                                <p class="font-cinzel text-lg font-bold text-textWhite">${membro.nome}</p>
                                <p class="font-montserrat text-[10px] tracking-widest text-primary uppercase mt-1">${unidade.nome}</p>
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="card-surface p-1.5 border border-white/5 group overflow-hidden flex flex-col h-full min-h-[300px]">
                            <div class="flex-grow flex items-center justify-center rounded-[0.5rem] bg-[#1a1a1a] p-6 border border-white/5">
                                <i data-lucide="user" class="w-12 h-12 text-white/10 group-hover:text-primary/30 transition-colors duration-300"></i>
                            </div>
                            <div class="p-4 text-center shrink-0">
                                <p class="font-cinzel text-lg font-bold text-textWhite">${membro.nome}</p>
                                <p class="font-montserrat text-[10px] tracking-widest text-primary uppercase mt-1">${unidade.nome}</p>
                            </div>
                        </div>
                    `;
                }
            }).join('');
            
            equipeHtml = `
                <div class="col-span-full pt-16 border-t border-white/5 mt-8">
                    <h4 class="font-cinzel text-2xl font-bold mb-8 text-center">Conheça nossa equipe</h4>
                    <div class="grid gap-6 ${colsClass}">
                        ${cards}
                    </div>
                </div>
            `;
        }

        contentContainer.innerHTML = `
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 opacity-0 translate-y-4 animate-[fadeIn_400ms_ease-out_forwards]">
                
                <!-- Coluna Esquerda: Informações (40%) -->
                <div class="lg:col-span-5 flex flex-col">
                    <div class="lg:sticky lg:top-24 space-y-8">
                        <div>
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded border border-primary/30 bg-primary/10 mb-4">
                                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-primary"></i>
                                <span class="font-montserrat text-[10px] tracking-[0.2em] uppercase text-primary font-bold">${unidade.cidade}</span>
                            </div>
                            <h3 class="font-cinzel text-3xl lg:text-4xl font-bold mb-3">${unidade.nome}</h3>
                            <p class="text-[#B9B9B9] text-base leading-relaxed">${unidade.diferencial}</p>
                        </div>

                        <div class="space-y-5 bg-[#151515] rounded-2xl p-6 border border-white/5">
                            <div class="flex items-start gap-4">
                                <i data-lucide="map" class="w-5 h-5 text-primary shrink-0 mt-0.5"></i>
                                <div>
                                    <p class="font-montserrat text-[10px] font-bold tracking-widest uppercase text-textWhite mb-1">Endereço</p>
                                    <p class="text-[#B9B9B9] text-sm leading-relaxed">${unidade.endereco}</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <i data-lucide="clock" class="w-5 h-5 text-primary shrink-0 mt-0.5"></i>
                                <div>
                                    <p class="font-montserrat text-[10px] font-bold tracking-widest uppercase text-textWhite mb-1">Horários</p>
                                    <p class="text-[#B9B9B9] text-sm leading-relaxed">${unidade.horarios.semana}<br>${unidade.horarios.sabado}<br>${unidade.horarios.domingo}</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <i data-lucide="phone" class="w-5 h-5 text-primary shrink-0 mt-0.5"></i>
                                <div>
                                    <p class="font-montserrat text-[10px] font-bold tracking-widest uppercase text-textWhite mb-1">Contato</p>
                                    <p class="text-[#B9B9B9] text-sm">${unidade.telefone}</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="${unidade.linkAgendamento}" target="_blank" rel="noopener" class="btn-primary flex-1 text-center">
                                Agendar nesta unidade
                            </a>
                            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(unidade.endereco)}" target="_blank" rel="noopener" class="btn-secondary flex-1 text-center">
                                <i data-lucide="navigation" class="w-4 h-4"></i> Como chegar
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Coluna Direita: Serviços (60%) -->
                <div class="lg:col-span-7">
                    <h4 class="font-cinzel text-2xl font-bold mb-6">Serviços Disponíveis</h4>
                    <div class="space-y-3">
                        ${servicosHtml}
                    </div>
                </div>

                <!-- Equipe (Full width) -->
                ${equipeHtml}
            </div>
        `;

        // Re-initialize Lucide for newly injected HTML
        if (typeof lucide !== 'undefined') lucide.createIcons();
    };

    // Tab Navigation for Units
    const tabs = document.querySelectorAll('.tab-unidade');
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                // Update active visual state
                tabs.forEach(t => {
                    t.setAttribute('aria-selected', 'false');
                    t.classList.remove('border-primary', 'text-primary', 'bg-primary/5');
                    t.classList.add('border-transparent', 'text-white/50', 'hover:text-white', 'hover:border-white/20');
                });
                
                const currentTab = e.currentTarget;
                currentTab.setAttribute('aria-selected', 'true');
                currentTab.classList.add('border-primary', 'text-primary', 'bg-primary/5');
                currentTab.classList.remove('border-transparent', 'text-white/50', 'hover:text-white', 'hover:border-white/20');
                
                // Render content
                renderUnidade(currentTab.dataset.unidade);
            });
        });

        // Initialize with Botafogo
        tabs[0].click();
    }
});

// CSS injected animation keyframes for dynamic render
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);
