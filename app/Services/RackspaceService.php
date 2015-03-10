<?php namespace Gifable\Services;

use OpenCloud\Rackspace;

class RackspaceService {

    protected $container;

    function __construct()
    {
        $client = new Rackspace(Rackspace::US_IDENTITY_ENDPOINT, array(
            'username' => env('RACKSPACE_USERNAME'),
            'apiKey' => env('RACKSPACE_API_KEY')
        ));
        $objectStoreService = $client->objectStoreService(null, env('RACKSPACE_REGION'));
        $this->container = $objectStoreService->getContainer(env('RACKSPACE_CONTAINER'));
    }

    public function uploadFile($remoteFilename, $path)
    {
        return $this->container->uploadObject($remoteFilename, fopen($path, 'r'));
    }

    public function uploadFiles($files)
    {
        $responses = $this->container->uploadObjects($files);

        // Temporary workaround until new version of Rackspace PHP SDK released (https://github.com/rackspace/php-opencloud/issues/545)
        $dataObjects = [];
        foreach ($responses as $index => $response) {
            $dataObject = $this->container->dataObject()->setName($files[$index]['name']);
            array_push($dataObjects, $dataObject);
        }

        return $dataObjects;
    }

}
