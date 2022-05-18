<template>
    <div class="flex mx-auto my-8">
      <div class="grid grid-rows-2 grid-flow-col gap-4">
          <div class="col-span-1">
            <router-link to="/top-menu/central-iframe">
              <div class="box p-8 relative overflow-hidden intro-y h-full">
              <!-- <LayoutIcon class="block w-24 h-24 text-primary mx-auto text-left ml-12" /> -->
              <span class="block text-primary mx-auto text-left ml-10"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" width="128" height="128" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M28 17v5H4V6h10V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-5ZM18 28h-4v-4h4Z"></path><path fill="currentColor" d="M30 10V8h-2.101a4.968 4.968 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A4.968 4.968 0 0 0 24 4.101V2h-2v2.101a4.968 4.968 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A4.968 4.968 0 0 0 18.101 8H16v2h2.101a4.968 4.968 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a4.968 4.968 0 0 0 1.753.732V16h2v-2.101a4.968 4.968 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A4.968 4.968 0 0 0 27.899 10Zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3Z"></path></svg></span>
              <div class="text-3xl font-medium mt-10 text-left ml-10">Central de Serviços</div>
              <div class="text-2xl italic text-slate-400 px-10 text-left mx-auto mt-2">
                Acesse todos serviços do detran como se estivesse em sua casa.
              </div>
              </div>
            </router-link>
          </div>
          <div class="col-span-1">
            <router-link to="/top-menu/raptor-iframe">
              <div class="box p-8 relative overflow-hidden intro-y h-full">
                <!-- <CreditCardIcon class="block w-32 h-32 text-primary mx-auto text-left ml-10" /> -->
                <span class="block text-primary mx-auto text-left ml-10"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="128" height="128" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M2 6h2v12H2V6m3 0h1v12H5V6m2 0h3v12H7V6m4 0h1v12h-1V6m3 0h2v12h-2V6m3 0h3v12h-3V6m4 0h1v12h-1V6Z"></path></svg></span>
                <div class="text-3xl font-medium mt-10 text-left ml-10">Pagamentos</div>
                <div class="text-2xl italic text-slate-400 px-10 text-left mx-auto mt-2">
                  Pague e parcele suas dívidas com várias opções.
                </div>
              </div>
            </router-link>
          </div>
          <div class="row-span-2">
            <router-link to="/top-menu/pesquisa-iframe">
              <div class="box p-8 relative overflow-hidden intro-y h-full flex justify-center flex-col">
                <!-- <SmileIcon class="block w-32 h-32 text-primary mx-auto text-left ml-10" /> -->
                <span class="block text-primary mx-auto text-left ml-10"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--octicon" width="128" height="128" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53c-.92 0-1.81-.17-2.64-.53c-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64c.34-.81.83-1.55 1.45-2.17c.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53c.81.34 1.55.83 2.17 1.45c.62.62 1.11 1.36 1.45 2.17c.36.83.53 1.72.53 2.64c0 .92-.17 1.81-.53 2.64c-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z" fill="currentColor"></path></svg></span>
                <div class="text-3xl font-medium mt-10 text-left ml-10">Pesquisa de Satisfação</div>
                <div class="text-2xl italic text-slate-400 px-10 text-left mx-auto mt-2">
                  Avalie sua experiência e colabore com nossa melhoria.
                </div>
              </div>
            </router-link>
          </div>
      </div>
    </div>
</template>
