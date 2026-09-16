function(properties, context) {
  if (properties.isOptIn) {
    posthog.opt_in_capturing()
  } else {
    posthog.opt_out_capturing()
  }
  //posthog.has_opted_out_capturing()
}