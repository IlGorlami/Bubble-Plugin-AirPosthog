function(properties, context) {
	posthog.identify(properties.uid);
    
    if(properties.email){
    posthog.people.set({ email: properties.email })
    }
}